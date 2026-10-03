import "server-only";
import crypto from "crypto";
import { adminDb } from "./firebaseAdmin";

export function clientIp(request) {
  const fwd = request.headers.get("x-forwarded-for") || "";
  return fwd.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
}

// Fixed-window counter in Firestore. Returns true if the call is allowed.
// Public endpoints that spend model tokens go through this.
export async function allow(key, limit, windowSec) {
  const id = crypto.createHash("sha256").update(key).digest("hex").slice(0, 40);
  const ref = adminDb().collection("rate_limits").doc(id);
  return adminDb().runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const now = Date.now();
    let { count = 0, resetAt = 0 } = snap.exists ? snap.data() : {};
    if (now > resetAt) {
      count = 0;
      resetAt = now + windowSec * 1000;
    }
    if (count >= limit) return false;
    tx.set(ref, { count: count + 1, resetAt, expireAt: new Date(resetAt) });
    return true;
  });
}
