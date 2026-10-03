import "server-only";
import crypto from "crypto";
import { adminDb } from "./firebaseAdmin";
import { planById, RENEWAL_NOTICE_DAYS } from "../content/planCatalog";
import { categoryById } from "../content/jobCatalog";
import {
  jobsCol,
  newAccessKey,
  amountFor,
  createPaymentLink,
  fetchPaymentLink,
  generateProposal,
  addMessage,
  sendEmail,
  shell,
  firstName,
  esc,
} from "./jobs";

const SITE_URL = process.env.SITE_URL || "https://www.grahaisystems.com";
const TEAM_INBOX = "support@grahai.com";

export const plansCol = () => adminDb().collection("plan_subs");
const iso = (v) => (v?.toDate ? v.toDate().toISOString() : v instanceof Date ? v.toISOString() : v || null);
const toDate = (v) => (v?.toDate ? v.toDate() : v ? new Date(v) : null);
const DAY = 86400000;

export function addMonth(d) {
  const x = new Date(d);
  const day = x.getUTCDate();
  x.setUTCMonth(x.getUTCMonth() + 1);
  if (x.getUTCDate() < day) x.setUTCDate(0);
  return x;
}

// Paid months chain from periodStart; the current one is the last month
// boundary that has passed (so early renewals don't merge two months' usage).
export function currentPeriodStart(sub) {
  let s = toDate(sub.periodStart);
  const end = toDate(sub.periodEnd);
  if (!s || !end) return null;
  const now = new Date();
  for (let n = addMonth(s); n <= now && n < end; n = addMonth(s)) s = n;
  return s;
}

export function requestsUsedThisPeriod(sub, requests) {
  const start = currentPeriodStart(sub);
  if (!start) return 0;
  return requests.filter((r) => toDate(r.createdAt) >= start && !["declined", "custom"].includes(r.status)).length;
}

export const planUrl = (sub) => `${SITE_URL}/hire/plans/${sub.id}?k=${sub.accessKey}`;

export async function loadPlanById(id) {
  if (!id || typeof id !== "string" || id.length > 64 || id.includes("/")) return null;
  const snap = await plansCol().doc(id).get();
  return snap.exists ? { id: snap.id, ...snap.data() } : null;
}

export async function loadPlan(id, key) {
  if (typeof key !== "string" || !key) return null;
  const sub = await loadPlanById(id);
  if (!sub?.accessKey) return null;
  const a = Buffer.from(sub.accessKey);
  const b = Buffer.from(key);
  return a.length === b.length && crypto.timingSafeEqual(a, b) ? sub : null;
}

// Status as of now: an active plan whose period ran out without a renewal is lapsed.
export function effectiveStatus(sub) {
  const end = toDate(sub.periodEnd);
  if (sub.status === "active" && end && end.getTime() < Date.now()) return sub.cancelAtPeriodEnd ? "cancelled" : "lapsed";
  return sub.status;
}

export async function createPlan({ plan, email, name, phone, country, firstRequest, linkedJobId, source }) {
  const p = planById(plan);
  const now = new Date();
  const doc = {
    plan: p.id,
    planName: p.name,
    priceUsd: p.priceUsd,
    currency: country === "IN" ? "INR" : "USD",
    email,
    name: name || "",
    phone: phone || "",
    country: country || "",
    accessKey: newAccessKey(),
    status: "pending",
    periodStart: null,
    periodEnd: null,
    cancelAtPeriodEnd: false,
    payment: { status: "unpaid" },
    paymentsCount: 0,
    firstRequest: firstRequest || "",
    linkedJobId: linkedJobId || null,
    source: source || "",
    createdAt: now,
    updatedAt: now,
  };
  const ref = await plansCol().add(doc);
  return { id: ref.id, ...doc };
}

export async function listRequests(subId) {
  const snap = await jobsCol().where("membershipId", "==", subId).limit(200).get();
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (toDate(b.createdAt)?.getTime() || 0) - (toDate(a.createdAt)?.getTime() || 0));
}

export function planClientView(sub, requests = []) {
  const p = planById(sub.plan);
  const status = effectiveStatus(sub);
  const end = toDate(sub.periodEnd);
  const used = requestsUsedThisPeriod(sub, requests);
  const amount = amountFor(sub.priceUsd, sub.currency);
  return {
    id: sub.id,
    plan: sub.plan,
    planName: sub.planName,
    tagline: p?.tagline || "",
    includes: p?.includes || [],
    activeLimit: p?.activeLimit || 1,
    requestsPerPeriod: p?.requestsPerPeriod ?? null,
    requestsUsed: used,
    priceDisplay: amount.display,
    currency: sub.currency,
    status,
    periodStart: iso(sub.periodStart),
    periodEnd: iso(sub.periodEnd),
    renewalDue: status === "active" && !sub.cancelAtPeriodEnd && end && end.getTime() - Date.now() < RENEWAL_NOTICE_DAYS * DAY,
    cancelAtPeriodEnd: !!sub.cancelAtPeriodEnd,
    name: sub.name,
    email: sub.email,
    phone: sub.phone || "",
    country: sub.country || "",
    firstRequest: sub.firstRequest || "",
    createdAt: iso(sub.createdAt),
    requests: requests.map((r) => ({
      id: r.id,
      title: r.proposal?.title || r.title,
      status: r.status,
      createdAt: iso(r.createdAt),
      dueAt: iso(r.dueAt),
      url: `/hire/jobs/${r.id}?k=${r.accessKey}`,
    })),
  };
}

// ── Billing ─────────────────────────────────────────────────────────────────
export async function getOrCreatePlanPaymentLink(sub, origin) {
  const { minor } = amountFor(sub.priceUsd, sub.currency);
  const purpose = sub.status === "pending" ? "start" : "renewal";
  const existing = sub.payment || {};
  if (existing.linkId && existing.status === "link_created" && existing.amountMinor === minor && existing.currency === sub.currency) {
    const link = await fetchPaymentLink(existing.linkId);
    if (link?.status === "created") return link.short_url;
    if (link?.status === "paid") return null;
  }
  const link = await createPaymentLink({
    amountMinor: minor,
    currency: sub.currency,
    referencePrefix: `plan_${sub.id}`,
    description: `GrahAI Agents — ${sub.planName} (1 month)`,
    callbackUrl: `${origin}/api/plans/${sub.id}/paid`,
    customer: { email: sub.email, contact: sub.phone, name: sub.name },
    notes: { product: "hire-plan", plan: sub.plan, plan_sub_id: sub.id, purpose, email: sub.email },
  });
  await plansCol().doc(sub.id).update({
    payment: { status: "link_created", linkId: link.id, url: link.short_url, amountMinor: minor, currency: sub.currency, purpose, createdAt: new Date() },
    updatedAt: new Date(),
  });
  return link.short_url;
}

// Confirm with Razorpay, then extend the plan by one month — exactly once per
// paid link (the payments/{linkId} ledger doc is the idempotency key).
export async function reconcilePlanPayment(subId) {
  const sub = await loadPlanById(subId);
  const pay = sub?.payment;
  if (!pay?.linkId || pay.status !== "link_created") return sub;
  const link = await fetchPaymentLink(pay.linkId);
  if (!link || link.status !== "paid") return sub;
  if (link.amount_paid !== pay.amountMinor || link.currency !== pay.currency) {
    console.error("[plans] amount mismatch on", subId, link.amount_paid, pay.amountMinor);
    return sub;
  }
  const ref = plansCol().doc(subId);
  const ledger = ref.collection("payments").doc(pay.linkId);
  const result = await adminDb().runTransaction(async (tx) => {
    const [snap, led] = await Promise.all([tx.get(ref), tx.get(ledger)]);
    if (led.exists) return null;
    const cur = snap.data();
    const now = new Date();
    const curEnd = toDate(cur.periodEnd);
    const continuing = effectiveStatus(cur) === "active" && curEnd && curEnd > now;
    const start = continuing ? curEnd : now;
    const end = addMonth(start);
    tx.set(ledger, { amountMinor: pay.amountMinor, currency: pay.currency, paymentId: link.payments?.[0]?.payment_id || null, purpose: pay.purpose, paidAt: now, periodStart: start, periodEnd: end });
    tx.update(ref, {
      status: "active",
      periodStart: continuing ? cur.periodStart : start,
      periodEnd: end,
      cancelAtPeriodEnd: false,
      "payment.status": "paid",
      "payment.paidAt": now,
      paymentsCount: (cur.paymentsCount || 0) + 1,
      lastPaidAt: now,
      reminderSentFor: null,
      updatedAt: now,
    });
    return { firstTime: !cur.paymentsCount, end };
  });
  const fresh = await loadPlanById(subId);
  if (result) {
    await promoteQueued(fresh);
    await Promise.allSettled([notifyPlanPaid(fresh, result.firstTime)]);
  }
  return fresh;
}

// When a plan has free capacity, move the oldest queued request into progress.
export async function promoteQueued(sub) {
  if (!sub || effectiveStatus(sub) !== "active") return;
  const limit = planById(sub.plan)?.activeLimit || 1;
  const reqs = await listRequests(sub.id);
  let active = reqs.filter((r) => ["in_progress", "revision", "delivered"].includes(r.status)).length;
  const queued = reqs.filter((r) => r.status === "queued").reverse();
  for (const r of queued) {
    if (active >= limit) break;
    const due = new Date(Date.now() + (r.proposal?.deliveryDays || 3) * DAY);
    await jobsCol().doc(r.id).update({ status: "in_progress", dueAt: due, updatedAt: new Date() });
    await addMessage(r.id, "system", `Your ${sub.planName} request is now in progress — target delivery ${due.toDateString()}.`, { kind: "started" });
    await notifyTeamPlan(sub, `▶️ Plan request started: ${r.proposal?.title || r.title}`, `Due ${due.toDateString()}. Copy the agent brief from /admin/jobs.`);
    active += 1;
  }
}

export async function createPlanRequest(sub, { title, description, category }) {
  const job = {
    title,
    description,
    category,
    email: sub.email,
    name: sub.name,
    phone: sub.phone,
    country: sub.country,
    currency: sub.currency,
    budget: "unsure",
    timeline: "flexible",
    source: `plan/${sub.plan}`,
    accessKey: newAccessKey(),
  };
  const proposal = await generateProposal(job);
  const status = proposal.fit === "decline" ? "declined" : "queued";
  const now = new Date();
  const ref = await jobsCol().add({
    ...job,
    kind: "plan_request",
    membershipId: sub.id,
    membershipKey: sub.accessKey,
    plan: sub.plan,
    planName: sub.planName,
    proposal,
    status,
    payment: { status: "covered" },
    revisionsUsed: 0,
    clientMessageCount: 0,
    createdAt: now,
    updatedAt: now,
  });
  if (proposal.fit === "too_large") {
    await addMessage(ref.id, "system", "This looks bigger than a single plan request. The team will reply here with how to split it, or a quote for the larger build.", { kind: "too_large" });
  }
  await notifyTeamPlan(
    sub,
    `🧾 New ${sub.planName} request (${status}${proposal.fit === "too_large" ? ", LARGE" : ""}): ${proposal.title || title}`,
    `${description}\n\nAgent scope:\n${(proposal.deliverables || []).map((d) => `- ${d}`).join("\n")}\n${proposal.declineReason || ""}`,
  );
  await promoteQueued(await loadPlanById(sub.id));
  return ref.id;
}

// ── Daily sweep (Vercel cron) ───────────────────────────────────────────────
// Idempotent: reminders are sent once per period, lapses are status flips.
export async function runPlanSweep(origin) {
  const snap = await plansCol().where("status", "==", "active").limit(500).get();
  const out = { checked: snap.size, reminded: 0, lapsed: 0, cancelled: 0, renewed: 0 };
  for (const d of snap.docs) {
    let sub = { id: d.id, ...d.data() };
    if (sub.payment?.status === "link_created") {
      const before = toDate(sub.periodEnd)?.getTime();
      sub = await reconcilePlanPayment(sub.id);
      if (toDate(sub.periodEnd)?.getTime() !== before) out.renewed += 1;
    }
    const end = toDate(sub.periodEnd);
    if (!end) continue;
    const eff = effectiveStatus(sub);
    if (eff === "lapsed" || eff === "cancelled") {
      await plansCol().doc(sub.id).update({ status: eff, updatedAt: new Date() });
      out[eff] += 1;
      if (eff === "lapsed") await notifyPlanLapsed(sub);
      continue;
    }
    const dueSoon = end.getTime() - Date.now() < RENEWAL_NOTICE_DAYS * DAY;
    const key = end.toISOString();
    if (dueSoon && !sub.cancelAtPeriodEnd && sub.reminderSentFor !== key) {
      try {
        await getOrCreatePlanPaymentLink(sub, origin);
        await plansCol().doc(sub.id).update({ reminderSentFor: key });
        await notifyRenewalDue(sub, end);
        out.reminded += 1;
      } catch (e) {
        console.error("[plans] renewal link failed", sub.id, e?.message || e);
      }
    }
  }
  return out;
}

// ── Email ───────────────────────────────────────────────────────────────────
async function notifyTeamPlan(sub, subject, body) {
  await sendEmail({
    to: TEAM_INBOX,
    replyTo: sub.email,
    subject: `[Plans] ${subject}`,
    text: `${sub.planName} · ${sub.name || "-"} <${sub.email}> (${sub.country})\n\n${body}\n\nAdmin: ${SITE_URL}/admin/plans\nClient plan room: ${planUrl(sub)}`,
  });
}

export async function notifyPlanPaid(sub, firstTime) {
  const amount = amountFor(sub.priceUsd, sub.currency).display;
  const until = toDate(sub.periodEnd)?.toDateString();
  await Promise.allSettled([
    sendEmail({
      to: sub.email,
      subject: firstTime ? `Your ${sub.planName} is active` : `${sub.planName} renewed — thank you`,
      html: shell(
        `<p style="margin:0 0 14px">Hi ${esc(firstName(sub))},</p>
         <p style="margin:0 0 14px">${firstTime ? `Your <strong>${esc(sub.planName)}</strong> is active.` : `We received ${esc(amount)} — your <strong>${esc(sub.planName)}</strong> continues.`} It runs until <strong>${esc(until)}</strong>.</p>
         <p style="margin:0">Send requests any time from your plan room. You can cancel whenever you like — the plan simply stops at the end of the period.</p>`,
        { href: planUrl(sub), label: "Open your plan room →" },
      ),
      text: `${firstTime ? `Your ${sub.planName} is active` : `${sub.planName} renewed`} until ${until}. Plan room: ${planUrl(sub)}`,
    }),
    notifyTeamPlan(sub, `💰 ${firstTime ? "NEW" : "RENEWED"} ${sub.planName} ${amount}`, `Paid. Active until ${until}.`),
  ]);
}

async function notifyRenewalDue(sub, end) {
  const amount = amountFor(sub.priceUsd, sub.currency).display;
  await sendEmail({
    to: sub.email,
    subject: `Your ${sub.planName} renews on ${end.toDateString()}`,
    html: shell(
      `<p style="margin:0 0 14px">Hi ${esc(firstName(sub))},</p>
       <p style="margin:0 0 14px">Your <strong>${esc(sub.planName)}</strong> period ends on <strong>${esc(end.toDateString())}</strong>. Renew for another month (${esc(amount)}) from your plan room to keep your requests moving.</p>
       <p style="margin:0">Not renewing? No action needed — the plan pauses at the end of the period and you can restart any time.</p>`,
      { href: planUrl(sub), label: `Renew — ${amount}` },
    ),
    text: `Your ${sub.planName} ends ${end.toDateString()}. Renew (${amount}): ${planUrl(sub)}`,
  });
}

async function notifyPlanLapsed(sub) {
  await Promise.allSettled([
    sendEmail({
      to: sub.email,
      subject: `Your ${sub.planName} is paused`,
      html: shell(
        `<p style="margin:0 0 14px">Hi ${esc(firstName(sub))},</p>
         <p style="margin:0">Your <strong>${esc(sub.planName)}</strong> period ended, so new requests are paused. Anything already in progress will still be finished. Restart any time from your plan room.</p>`,
        { href: planUrl(sub), label: "Restart your plan →" },
      ),
      text: `Your ${sub.planName} is paused. Restart: ${planUrl(sub)}`,
    }),
    notifyTeamPlan(sub, `⏸ LAPSED ${sub.planName}`, "Renewal wasn't paid. Worth a personal nudge."),
  ]);
}

export { categoryById };
