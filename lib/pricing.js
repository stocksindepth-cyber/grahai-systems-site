import crypto from "crypto";
import {
  lanes,
  PRICE_FLOOR_USD,
  PRICE_CEIL_USD,
  WEEKS_FLOOR,
  WEEKS_CEIL,
  FULL_PAYMENT_MAX_USD,
  DEPOSIT_PCT,
  DEPOSIT_MIN_USD,
  DEPOSIT_MAX_USD,
  USD_TO_INR,
} from "../content/rateCard";

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const roundTo = (n, step) => Math.round(n / step) * step;

// Country → currency. India pays INR; everyone else USD (Razorpay International).
export function currencyForCountry(country) {
  return (country || "").toUpperCase() === "IN" ? "INR" : "USD";
}

export function detectCountry(headers, override) {
  if (override) return String(override).toUpperCase();
  const h = headers?.get?.("x-vercel-ip-country");
  return (h || "US").toUpperCase();
}

const fmt = (currency, amount) =>
  currency === "INR"
    ? `₹${Math.round(amount).toLocaleString("en-IN")}`
    : `$${Math.round(amount).toLocaleString("en-US")}`;

// Convert a USD figure to the target currency, rounded to a clean number.
function toCurrency(usd, currency, step) {
  if (currency === "INR") return roundTo(usd * USD_TO_INR, step.inr);
  return roundTo(usd, step.usd);
}

// Take the model's raw suggestion + the resolved currency and produce the final,
// server-authoritative quote. Every number is clamped to the rate card here.
export function finalizeQuote(raw, currency) {
  const lane = lanes.find((l) => l.id === raw.laneId) || lanes[3];

  // Clamp price into the lane band, then the global band.
  let priceUsd = clamp(Number(raw.priceUsd) || lane.typical, lane.min, lane.max);
  priceUsd = clamp(priceUsd, PRICE_FLOOR_USD, PRICE_CEIL_USD);

  const totalWeeks = clamp(
    Math.round(Number(raw.totalWeeks) || lane.weeksMin),
    Math.max(WEEKS_FLOOR, lane.weeksMin),
    Math.min(WEEKS_CEIL, lane.weeksMax),
  );

  // Payment mode is decided by the server, not the model.
  const paymentMode = priceUsd <= FULL_PAYMENT_MAX_USD ? "full" : "deposit";
  const depositUsd = clamp(
    Math.round(priceUsd * DEPOSIT_PCT),
    DEPOSIT_MIN_USD,
    DEPOSIT_MAX_USD,
  );
  const payNowUsd = paymentMode === "full" ? priceUsd : depositUsd;

  const priceDisplayAmt = toCurrency(priceUsd, currency, { usd: 100, inr: 5000 });
  const payNowAmt = toCurrency(payNowUsd, currency, { usd: 50, inr: 500 });
  const payNowMinor = Math.round(payNowAmt * 100); // paise / cents

  return {
    packageName: String(raw.packageName || lane.name).slice(0, 80),
    laneId: lane.id,
    summary: String(raw.summary || "").slice(0, 600),
    scope: (raw.scope || []).slice(0, 8).map((s) => String(s).slice(0, 160)),
    phases: (raw.phases || []).slice(0, 6).map((p) => ({
      name: String(p.name || "Phase").slice(0, 60),
      weeks: clamp(Math.round(Number(p.weeks) || 1), 1, WEEKS_CEIL),
      deliverables: String(p.deliverables || "").slice(0, 200),
    })),
    assumptions: (raw.assumptions || []).slice(0, 5).map((a) => String(a).slice(0, 160)),
    totalWeeks,
    currency,
    priceFromDisplay: `from ${fmt(currency, priceDisplayAmt)}`,
    paymentMode,
    payNowMinor,
    payNowDisplay: fmt(currency, payNowAmt),
    payNowLabel:
      paymentMode === "full"
        ? "Pay & start your build"
        : "Pay booking deposit (credited to your project)",
    indicative: true,
  };
}

// ── Tamper-proof quote token ────────────────────────────────────────────────
// The client can't be trusted with the amount, so we sign the payable fields.
// /api/create-order verifies the signature before creating the Razorpay order.
function secret() {
  return process.env.QUOTE_SIGNING_SECRET || process.env.RAZORPAY_KEY_SECRET || "dev-secret";
}

export function signQuote(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", secret()).update(body).digest("hex");
  return `${body}.${sig}`;
}

export function verifyQuoteToken(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) return null;
  const [body, sig] = token.split(".");
  const expected = crypto.createHmac("sha256", secret()).update(body).digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    return JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    return null;
  }
}
