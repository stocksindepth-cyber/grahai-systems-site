import { NextResponse } from "next/server";
import { adminFromRequest } from "../../../../lib/firebaseAdmin";
import { plansCol, effectiveStatus, reconcilePlanPayment, loadPlanById, planUrl, listRequests } from "../../../../lib/plans";

export const runtime = "nodejs";

const iso = (v) => (v?.toDate ? v.toDate().toISOString() : null);

function row(d) {
  return {
    id: d.id,
    plan: d.plan,
    planName: d.planName,
    priceUsd: d.priceUsd,
    currency: d.currency,
    name: d.name,
    email: d.email,
    country: d.country,
    status: effectiveStatus(d),
    cancelAtPeriodEnd: !!d.cancelAtPeriodEnd,
    periodEnd: iso(d.periodEnd),
    paymentsCount: d.paymentsCount || 0,
    paymentStatus: d.payment?.status || "unpaid",
    source: d.source || "",
    createdAt: iso(d.createdAt),
    roomUrl: planUrl(d),
  };
}

export async function GET(request) {
  if (!(await adminFromRequest(request))) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const snap = await plansCol().orderBy("createdAt", "desc").limit(500).get();
  const subs = snap.docs.map((d) => row({ id: d.id, ...d.data() }));
  const active = subs.filter((s) => s.status === "active");
  return NextResponse.json({
    plans: subs,
    summary: {
      active: active.length,
      mrrUsd: active.reduce((a, s) => a + (s.priceUsd || 0), 0),
      endingAtPeriodEnd: active.filter((s) => s.cancelAtPeriodEnd).length,
      lapsed: subs.filter((s) => s.status === "lapsed").length,
      pending: subs.filter((s) => s.status === "pending").length,
    },
  });
}

// POST — { id, action: "check_payment" | "requests" }
export async function POST(request) {
  if (!(await adminFromRequest(request))) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const sub = await loadPlanById(body.id);
  if (!sub) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (body.action === "check_payment") {
    const fresh = await reconcilePlanPayment(sub.id);
    return NextResponse.json({ plan: row(fresh) });
  }
  if (body.action === "requests") {
    const reqs = await listRequests(sub.id);
    return NextResponse.json({ requests: reqs.map((r) => ({ id: r.id, title: r.proposal?.title || r.title, status: r.status, createdAt: iso(r.createdAt) })) });
  }
  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
