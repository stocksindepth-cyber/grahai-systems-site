import { NextResponse } from "next/server";
import crypto from "crypto";
import { verifyQuoteToken } from "../../../lib/pricing";

export const runtime = "nodejs";

const SITE_URL = "https://grahaisystems.com";

function keys() {
  return {
    id: process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    secret: process.env.RAZORPAY_KEY_SECRET,
  };
}

// Creates a Razorpay-HOSTED Payment Link for the quoted amount. The link opens
// on Razorpay's own domain, so grahaisystems.com does NOT need to be registered
// as a website in the Razorpay account (which avoids the website-limit cap).
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

  // Amount comes only from the signed quote token — never from the client.
  const quote = verifyQuoteToken(body.token);
  if (!quote || !quote.payNowMinor || !quote.currency) {
    return NextResponse.json({ error: "Invalid or expired quote. Please regenerate it." }, { status: 400 });
  }
  if (quote.payNowMinor < 100) {
    return NextResponse.json({ error: "Amount too low." }, { status: 400 });
  }

  const referenceId = `gsq_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
  const auth = Buffer.from(`${id}:${secret}`).toString("base64");

  const payload = {
    amount: quote.payNowMinor,
    currency: quote.currency,
    accept_partial: false,
    reference_id: referenceId,
    description: `${quote.packageName} — ${quote.paymentMode === "deposit" ? "booking deposit" : "engagement"}`,
    reminder_enable: false,
    callback_url: `${SITE_URL}/start/done`,
    callback_method: "get",
    notes: {
      app: "GrahAI Systems",
      product_brand: "grahaisystems",
      product: quote.packageName,
      payment_mode: quote.paymentMode,
      company: quote.company || "",
      source: "start-flow",
    },
  };
  // Razorpay rejects an empty customer object ("faulty key: customer"), so only
  // attach it when we actually have details. Otherwise Razorpay's hosted page
  // collects the customer's name/email itself.
  if (quote.email || quote.name) {
    const customer = {};
    if (quote.email) customer.email = quote.email;
    if (quote.name) customer.name = quote.name;
    payload.customer = customer;
    payload.notify = { email: !!quote.email, sms: false };
  }

  const res = await fetch("https://api.razorpay.com/v1/payment_links", {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = (await res.text()).slice(0, 300);
    console.error("[payment-link] razorpay error:", detail);
    return NextResponse.json({ error: "Could not create a secure payment link. Please try again or email support@grahai.com." }, { status: 502 });
  }

  const link = await res.json();
  return NextResponse.json({ url: link.short_url, referenceId });
}
