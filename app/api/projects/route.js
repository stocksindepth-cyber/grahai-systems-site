import { NextResponse } from "next/server";
import { adminDb, uidFromRequest } from "../../../lib/firebaseAdmin";
import { verifyQuoteToken } from "../../../lib/pricing";

export const runtime = "nodejs";

// Turn the quote's phases into a dated delivery plan starting today.
function buildPlan(quote) {
  const start = new Date();
  const phases = Array.isArray(quote.phases) ? quote.phases : [];
  let cursorWeeks = 0;
  const planned = phases.map((p) => {
    const phaseStart = addWeeks(start, cursorWeeks);
    cursorWeeks += Math.max(1, Number(p.weeks) || 1);
    const phaseEnd = addWeeks(start, cursorWeeks);
    return {
      name: p.name,
      weeks: Math.max(1, Number(p.weeks) || 1),
      deliverables: p.deliverables || "",
      startDate: phaseStart.toISOString(),
      endDate: phaseEnd.toISOString(),
      status: "upcoming", // upcoming | in_progress | done
    };
  });
  const totalWeeks = Number(quote.totalWeeks) || cursorWeeks || 1;
  return {
    startDate: start.toISOString(),
    deliveryDate: addWeeks(start, totalWeeks).toISOString(),
    milestones: planned,
  };
}
function addWeeks(d, w) {
  const x = new Date(d);
  x.setDate(x.getDate() + Math.round(w * 7));
  return x;
}

export async function GET(request) {
  const auth = await uidFromRequest(request);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const snap = await adminDb()
      .collection("users").doc(auth.uid).collection("projects")
      .orderBy("createdAt", "desc").limit(50).get();
    const projects = snap.docs.map((d) => ({ id: d.id, ...d.data(), createdAt: d.data().createdAt?.toDate?.()?.toISOString() || null }));
    return NextResponse.json({ projects });
  } catch (e) {
    console.error("[projects] list:", e?.message || e);
    return NextResponse.json({ error: "Failed to load projects" }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = await uidFromRequest(request);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Bad request" }, { status: 400 }); }

  const { token, quote } = body || {};
  const verified = verifyQuoteToken(token);
  if (!verified || !quote) {
    return NextResponse.json({ error: "Invalid or expired quote. Please regenerate it." }, { status: 400 });
  }
  // Trust the signed token for the money + package; everything else is the
  // user's own record.
  const plan = buildPlan(quote);
  const doc = {
    status: "quote", // quote | booked | in_progress | delivered
    packageName: verified.packageName || quote.packageName || "AI Engagement",
    summary: String(quote.summary || "").slice(0, 1000),
    scope: (quote.scope || []).slice(0, 12).map(String),
    assumptions: (quote.assumptions || []).slice(0, 8).map(String),
    totalWeeks: Number(quote.totalWeeks) || plan.milestones.length,
    currency: verified.currency,
    priceFromDisplay: quote.priceFromDisplay || "",
    paymentMode: verified.paymentMode,
    payNowDisplay: quote.payNowDisplay || "",
    payNowMinor: verified.payNowMinor,
    company: verified.company || "",
    contactEmail: verified.email || auth.email || "",
    ...plan,
    proposal: null, // filled by /api/rfp
    createdAt: new Date(),
  };

  try {
    const ref = await adminDb().collection("users").doc(auth.uid).collection("projects").add(doc);
    // Also ensure a lightweight user profile doc exists.
    await adminDb().collection("users").doc(auth.uid).set(
      { email: auth.email || "", lastQuoteAt: new Date() },
      { merge: true },
    );
    return NextResponse.json({ success: true, id: ref.id });
  } catch (e) {
    console.error("[projects] save:", e?.message || e);
    return NextResponse.json({ error: "Could not save your project" }, { status: 500 });
  }
}
