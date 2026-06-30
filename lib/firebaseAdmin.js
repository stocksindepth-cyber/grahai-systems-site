import "server-only";
import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

function ensure() {
  if (getApps().length) return;
  const b64 = process.env.FIREBASE_ADMIN_KEY_B64;
  if (!b64) throw new Error("FIREBASE_ADMIN_KEY_B64 not configured");
  const sa = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
  initializeApp({ credential: cert(sa) });
}

export function adminAuth() {
  ensure();
  return getAuth();
}

export function adminDb() {
  ensure();
  return getFirestore();
}

/** Verify the Firebase ID token on the Authorization header → uid (or null). */
export async function uidFromRequest(request) {
  const header = request.headers.get("authorization") || "";
  const m = header.match(/^Bearer (.+)$/);
  if (!m) return null;
  try {
    const decoded = await adminAuth().verifyIdToken(m[1]);
    return { uid: decoded.uid, email: decoded.email || "" };
  } catch {
    return null;
  }
}
