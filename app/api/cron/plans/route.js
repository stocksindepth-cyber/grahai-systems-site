import { NextResponse } from "next/server";
import { runPlanSweep } from "../../../../lib/plans";

export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";

// Daily: confirm renewals, send renewal links, lapse unpaid plans.
// The sweep is idempotent, so an unauthenticated trigger can't do anything the
// schedule wouldn't; CRON_SECRET (if set in Vercel) locks it down further.
export async function GET(request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const origin = process.env.SITE_URL || "https://www.grahaisystems.com";
  const result = await runPlanSweep(origin);
  return NextResponse.json({ ok: true, ...result });
}
