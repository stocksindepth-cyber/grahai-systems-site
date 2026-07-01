import { NextResponse } from "next/server";
import crypto from "crypto";
import { launchTiers } from "../../../content/launchTiers";
import { currencyForCountry, detectCountry } from "../../../lib/pricing";
import { USD_TO_INR } from "../../../content/rateCard";

export const runtime = "nodejs";

const SITE_URL = "https://grahaisystems.com";

function keys() {
  return {
    id: process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    secret: process.env.RAZORPAY_KEY_SECRET,
  };
}

// Creates a Razorpay-hosted Payment Link for a fixed Launch tier. The tier price
// is resolved SERVER-SIDE from launchTiers — the client only sends a tier id, so
// the amount can never be tampered with. Indian buyers are billed in INR.
export async function POST(request) {
  const { id, secret } = keys();
  if (!id || !secret) {
    return NextResponse.json({ error: "Payments are not configured yet." }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const tier = launchTiers.find((t) => t.id === body.tier);
  if (!tier) {
    return NextResponse.json({ error: "Unknown package." }, { status: 400 });
  }

  // Currency + amount are computed here, never trusted from the client.
  const country = detectCountry(request.headers, body.country);
  const currency = currencyForCountry(country);
  const amountMajor = currency === "INR" ? Math.round(tier.priceUsd * USD_TO_INR) : tier.priceUsd;
  const amountMinor = amountMajor * 100;

  const email = typeof body.email === "string" ? body.email.trim().slice(0, 120) : "";
  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  const company = typeof body.company === "string" ? body.company.trim().slice(0, 120) : "";

  const referenceId = `gsl_${tier.id}_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
  const auth = Buffer.from(`${id}:${secret}`).toString("base64");

  const payload = {
    amount: amountMinor,
    currency,
    accept_partial: false,
    reference_id: referenceId,
    description: `GrahAI Systems — ${tier.name} launch package`,
    reminder_enable: false,
    callback_url: `${SITE_URL}/start/done`,
    callback_method: "get",
    notes: {
      app: "GrahAI Systems",
      product_brand: "grahaisystems",
      product: "launch",
      tier: tier.id,
      tier_name: tier.name,
      company,
      source: "launch-page",
    },
  };
  // Razorpay rejects an empty customer object ("faulty key: customer"), so only
  // attach it when we actually have details. Otherwise Razorpay's hosted page
  // collects the customer's name/email itself.
  if (email || name) {
    const customer = {};
    if (email) customer.email = email;
    if (name) customer.name = name;
    payload.customer = customer;
    payload.notify = { email: !!email, sms: false };
  }

  const res = await fetch("https://api.razorpay.com/v1/payment_links", {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = (await res.text()).slice(0, 300);
    console.error("[launch-checkout] razorpay error:", detail);
    return NextResponse.json({ error: "Could not create a secure payment link. Please try again or email support@grahai.com." }, { status: 502 });
  }

  const link = await res.json();
  return NextResponse.json({ url: link.short_url, referenceId, currency, amount: amountMajor });
}
