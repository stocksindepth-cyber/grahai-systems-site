import { NextResponse } from "next/server";
import { verifyQuoteToken } from "../../../lib/pricing";

export const runtime = "nodejs";

function keys() {
  return {
    id: process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    secret: process.env.RAZORPAY_KEY_SECRET,
  };
}

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

  // The amount comes ONLY from the signed quote token — never from the client.
  const quote = verifyQuoteToken(body.token);
  if (!quote || !quote.payNowMinor || !quote.currency) {
    return NextResponse.json({ error: "Invalid or expired quote. Please regenerate it." }, { status: 400 });
  }
  if (quote.payNowMinor < 100) {
    return NextResponse.json({ error: "Amount too low." }, { status: 400 });
  }

  const auth = Buffer.from(`${id}:${secret}`).toString("base64");
  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: quote.payNowMinor,
      currency: quote.currency,
      payment_capture: 1,
      receipt: `grahaisystems_${Date.now()}`,
      // Brand-guard: ALL GrahAI products share one Razorpay account, so every
      // order must carry product_brand or webhooks cross-email siblings' buyers.
      notes: {
        app: "GrahAI Systems",
        product_brand: "grahaisystems",
        product: quote.packageName,
        payment_mode: quote.paymentMode,
        email: quote.email || "",
        name: quote.name || "",
        company: quote.company || "",
        source: "start-flow",
      },
    }),
  });

  if (!res.ok) {
    const detail = (await res.text()).slice(0, 200);
    console.error("[create-order] razorpay error:", detail);
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 502 });
  }

  const order = await res.json();
  return NextResponse.json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    keyId: id,
    name: quote.packageName,
    paymentMode: quote.paymentMode,
    email: quote.email || "",
  });
}
