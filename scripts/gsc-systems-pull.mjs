#!/usr/bin/env node
/**
 * gsc-systems-pull.mjs — GSC data pull for grahaisystems.com
 *
 * Answers:
 *  1. Is the site indexed and ranking for anything?
 *  2. What commercial-intent queries bring impressions? (AI services, AI agent, etc.)
 *  3. Which pages get clicks — opportunity for lead CTA optimisation?
 *  4. Near-miss queries (pos 4–20) where we're almost ranking
 *
 * Auth: uses the grahai-systems Firebase SA (FIREBASE_ADMIN_KEY_B64 in .env.local).
 * The SA email must be added as a GSC user on grahaisystems.com property.
 * If it isn't, the script prints the exact email to add.
 *
 * Usage:
 *   node --env-file=.env.local scripts/gsc-systems-pull.mjs [days=90]
 */
import crypto from 'node:crypto';

const DAYS = Number(process.argv[2]) || 90;

// ── Auth ─────────────────────────────────────────────────────────────────────
let sa;
try {
  const raw = process.env.FIREBASE_ADMIN_KEY_B64;
  if (!raw) throw new Error('FIREBASE_ADMIN_KEY_B64 not set');
  sa = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
} catch (e) {
  console.error('Could not parse FIREBASE_ADMIN_KEY_B64:', e.message);
  process.exit(1);
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })).toString('base64url');
  const unsigned = `${header}.${payload}`;
  const key = crypto.createPrivateKey(sa.private_key);
  const sig = crypto.sign('sha256', Buffer.from(unsigned), key).toString('base64url');
  const jwt = `${unsigned}.${sig}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(JSON.stringify(data));
  return data.access_token;
}

// ── GSC helpers ──────────────────────────────────────────────────────────────
async function gscFetch(token, path, body) {
  const res = await fetch(`https://searchconsole.googleapis.com${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  return res.json();
}

function dateStr(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

async function queryGSC(token, siteUrl, dimensions, filters, rows = 500) {
  const endDate = dateStr(3);    // GSC lags ~3 days
  const startDate = dateStr(DAYS + 3);
  return gscFetch(token, `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, {
    startDate, endDate, dimensions, rowLimit: rows,
    ...(filters ? { dimensionFilterGroups: [{ filters }] } : {}),
  });
}

// ── Main ─────────────────────────────────────────────────────────────────────
const token = await getAccessToken();

// 1. Find the grahaisystems.com property
const siteList = await gscFetch(token, '/webmasters/v3/sites');
if (!siteList.siteEntry) {
  console.error('No sites found. SA may not have GSC access at all.');
  console.error(`SA email: ${sa.client_email}`);
  process.exit(1);
}

const TARGET_PATTERNS = ['grahaisystems.com'];
let siteUrl = null;
for (const entry of siteList.siteEntry) {
  if (TARGET_PATTERNS.some(p => entry.siteUrl.includes(p))) {
    siteUrl = entry.siteUrl;
    break;
  }
}

if (!siteUrl) {
  console.error('\n⚠️  grahaisystems.com not found in this SA\'s GSC properties.');
  console.error(`Add this email as a GSC user on grahaisystems.com property:`);
  console.error(`  ${sa.client_email}`);
  console.error('\nAvailable properties:');
  siteList.siteEntry.forEach(e => console.error(`  ${e.siteUrl} (${e.permissionLevel})`));
  process.exit(1);
}

console.log(`✅ Property: ${siteUrl}  |  Period: last ${DAYS} days\n`);

// 2. Top queries overall
const queriesAll = await queryGSC(token, siteUrl, ['query'], null, 200);
const allQ = (queriesAll.rows || []).sort((a, b) => b.impressions - a.impressions);

// 3. Top pages
const pagesData = await queryGSC(token, siteUrl, ['page'], null, 100);
const topPages = (pagesData.rows || []).sort((a, b) => b.clicks - a.clicks);

// 4. Commercial-intent queries (AI services related)
const COMMERCIAL_TERMS = [
  'ai agent', 'ai automation', 'ai development', 'ai consultant', 'ai agency',
  'ai integration', 'ai implementation', 'ai chatbot', 'ai workflow', 'llm',
  'openai', 'claude', 'gpt', 'custom ai', 'ai saas', 'rag', 'ai for business',
  'hire ai', 'ai engineer', 'ai developer', 'build ai', 'ai company',
  'ai services', 'grahai',
];
const commercialQ = allQ.filter(r => {
  const q = r.keys[0].toLowerCase();
  return COMMERCIAL_TERMS.some(t => q.includes(t));
});

// 5. Near-miss queries (pos 4–20, decent impressions)
const nearMiss = allQ.filter(r => r.position >= 4 && r.position <= 20 && r.impressions >= 10)
  .sort((a, b) => {
    // Opportunity score: closer to page 1 + more impressions = better
    const scoreA = a.impressions * (1 / Math.pow(a.position, 0.7));
    const scoreB = b.impressions * (1 / Math.pow(b.position, 0.7));
    return scoreB - scoreA;
  })
  .slice(0, 25);

// 6. CTR leaks: ranking page 1 (pos < 10) but low CTR
const ctrLeaks = allQ.filter(r => r.position < 10 && r.impressions >= 20 && r.ctr < 0.02)
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 20);

// ── Print report ─────────────────────────────────────────────────────────────
const fmt = (n, dec = 1) => n?.toFixed(dec) ?? '—';

console.log('═══════════════════════════════════════════════════════════');
console.log(' OVERALL BASELINE');
console.log('═══════════════════════════════════════════════════════════');
const totClicks = allQ.reduce((s, r) => s + r.clicks, 0);
const totImpr   = allQ.reduce((s, r) => s + r.impressions, 0);
const avgPos    = allQ.length ? allQ.reduce((s, r) => s + r.position * r.impressions, 0) / Math.max(totImpr, 1) : 0;
const avgCtr    = totImpr ? totClicks / totImpr : 0;
console.log(`  Total clicks:      ${totClicks.toLocaleString()}`);
console.log(`  Total impressions: ${totImpr.toLocaleString()}`);
console.log(`  Avg CTR:           ${fmt(avgCtr * 100)}%`);
console.log(`  Avg position:      ${fmt(avgPos)}`);
console.log(`  Unique queries:    ${allQ.length}`);

if (totClicks === 0 && totImpr === 0) {
  console.log('\n  ⚠️  Zero data — site may not be indexed or GSC property has no data yet.');
}

console.log('\n═══════════════════════════════════════════════════════════');
console.log(' TOP PAGES BY CLICKS');
console.log('═══════════════════════════════════════════════════════════');
topPages.slice(0, 15).forEach((r, i) => {
  const page = r.keys[0].replace('https://grahaisystems.com', '') || '/';
  console.log(`  ${String(i+1).padStart(2)}. ${page.padEnd(50)} ${String(r.clicks).padStart(5)} clicks  ${String(r.impressions).padStart(7)} impr  pos ${fmt(r.position)}`);
});

console.log('\n═══════════════════════════════════════════════════════════');
console.log(' COMMERCIAL-INTENT QUERIES (AI services / brand)');
console.log('═══════════════════════════════════════════════════════════');
if (commercialQ.length === 0) {
  console.log('  None found — site may be too new or not indexed for these terms yet.');
} else {
  commercialQ.slice(0, 30).forEach((r, i) => {
    console.log(`  ${String(i+1).padStart(2)}. ${r.keys[0].padEnd(55)} impr ${String(r.impressions).padStart(6)}  pos ${fmt(r.position)}  CTR ${fmt(r.ctr * 100)}%`);
  });
}

console.log('\n═══════════════════════════════════════════════════════════');
console.log(' NEAR-MISS QUERIES (pos 4–20, highest opportunity)');
console.log('═══════════════════════════════════════════════════════════');
if (nearMiss.length === 0) {
  console.log('  None — site may be too new to have near-misses yet.');
} else {
  nearMiss.forEach((r, i) => {
    console.log(`  ${String(i+1).padStart(2)}. ${r.keys[0].padEnd(55)} pos ${fmt(r.position).padStart(5)}  impr ${String(r.impressions).padStart(6)}  CTR ${fmt(r.ctr * 100)}%`);
  });
}

console.log('\n═══════════════════════════════════════════════════════════');
console.log(' CTR LEAKS (page 1, low CTR — need better title/meta)');
console.log('═══════════════════════════════════════════════════════════');
if (ctrLeaks.length === 0) {
  console.log('  None found.');
} else {
  ctrLeaks.forEach((r, i) => {
    console.log(`  ${String(i+1).padStart(2)}. ${r.keys[0].padEnd(55)} pos ${fmt(r.position).padStart(5)}  impr ${String(r.impressions).padStart(6)}  CTR ${fmt(r.ctr * 100)}%`);
  });
}

console.log('\n═══════════════════════════════════════════════════════════');
console.log(' ALL QUERIES (top 50 by impressions)');
console.log('═══════════════════════════════════════════════════════════');
allQ.slice(0, 50).forEach((r, i) => {
  console.log(`  ${String(i+1).padStart(2)}. ${r.keys[0].padEnd(55)} impr ${String(r.impressions).padStart(6)}  pos ${fmt(r.position).padStart(5)}  CTR ${fmt(r.ctr * 100)}%  clicks ${r.clicks}`);
});
