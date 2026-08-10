import "server-only";
import { adminDb } from "./firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

const FROM = "GrahAI Systems <support@grahai.com>";
const INBOX = "support@grahai.com";
const esc = (s) => String(s || "").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));

// Capture a /start lead: persist to Firestore, email the prospect an instant
// tailored auto-reply, and notify the founder. Each step is best-effort so one
// failure never blocks the others (the quote must still return to the user).
export async function captureLead(lead) {
  let id = null;
  try {
    id = await persistLead(lead);
  } catch (e) {
    console.error("[leads] persist failed:", e?.message || e);
  }
  // Fire the emails but don't let them block the response for long.
  await Promise.allSettled([sendProspectAutoReply(lead), sendFounderNotification(lead, id)]);
  return id;
}

async function persistLead(lead) {
  const q = lead.quote || {};
  const ref = await adminDb().collection("leads").add({
    email: String(lead.email || "").slice(0, 200),
    name: lead.name ? String(lead.name).slice(0, 120) : "",
    company: lead.company ? String(lead.company).slice(0, 160) : "",
    country: lead.country || "",
    useCase: lead.useCase || "",
    scale: lead.scale || "",
    urgency: lead.urgency || "",
    integrations: Array.isArray(lead.integrations) ? lead.integrations.slice(0, 20) : [],
    requirements: String(lead.requirements || "").slice(0, 4000),
    packageInterest: lead.packageInterest || "",
    packageName: q.packageName || "",
    priceFromDisplay: q.priceFromDisplay || "",
    payNowDisplay: q.payNowDisplay || "",
    paymentMode: q.paymentMode || "",
    totalWeeks: q.totalWeeks || null,
    currency: q.currency || "",
    outreach: lead.outreach || null,
    status: "new", // new | contacted | quoted | won | lost
    source: "start",
    autoReplySent: !!process.env.RESEND_API_KEY,
    notes: [],
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });
  return ref.id;
}

// The automated, tailored "understand + convert" email to the prospect.
async function sendProspectAutoReply(lead) {
  if (!process.env.RESEND_API_KEY) return;
  const o = lead.outreach || {};
  const q = lead.quote || {};
  const firstName = (lead.name || "").trim().split(/\s+/)[0] || "there";
  const intro = o.intro || "Thank you for reaching out to GrahAI Systems — we'd love to help you build this.";
  const questions = Array.isArray(o.questions) && o.questions.length
    ? o.questions
    : ["Who are the main users?", "Do you already have the content or data, or would you like help creating it?", "What rough budget and timeline do you have in mind?"];
  const firstStep = o.firstStep || "We'd suggest starting with a lean, focused MVP we can launch quickly and then grow.";

  const qList = questions.map((qq) => `<li style="margin:0 0 8px">${esc(qq)}</li>`).join("");
  const html = `<!doctype html><html><body style="margin:0;background:#f6f8fb;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f1f30">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px">
    <div style="font-weight:800;font-size:18px;color:#1f3a5f">GrahAI <span style="font-weight:400;color:#64748b">Systems</span></div>
    <div style="background:#fff;border:1px solid #e5eaf1;border-radius:16px;padding:28px;margin-top:16px">
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6">Hi ${esc(firstName)},</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6">${esc(intro)}</p>
      ${q.packageName ? `<div style="background:#f0fdfa;border:1px solid #ccfbf1;border-radius:12px;padding:14px 16px;margin:0 0 16px;font-size:14px">
        <div style="font-weight:700;color:#0f766e">${esc(q.packageName)}</div>
        <div style="color:#475569;margin-top:2px">Indicative starting point: ${esc(q.priceFromDisplay)}${q.totalWeeks ? ` · ~${q.totalWeeks} weeks` : ""} — confirmed on a quick call.</div>
      </div>` : ""}
      <p style="margin:0 0 10px;font-size:15px;line-height:1.6">${esc(firstStep)}</p>
      <p style="margin:16px 0 8px;font-size:15px;line-height:1.6">To point you the right way, a few quick questions:</p>
      <ul style="margin:0 0 16px;padding-left:20px;font-size:15px;line-height:1.6;color:#334155">${qList}</ul>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6">Just reply to this email with whatever you know — or share a couple of times that suit you and we'll set up a short call.</p>
      <a href="https://grahaisystems.com/start" style="display:inline-block;background:#0d9488;color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:11px 20px;border-radius:10px">Explore what we build →</a>
      <p style="margin:22px 0 0;font-size:14px;line-height:1.6;color:#475569">Warm regards,<br>The GrahAI Systems team<br><a href="https://grahaisystems.com" style="color:#0d9488">grahaisystems.com</a></p>
    </div>
    <p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:16px">You received this because you requested a project scope at grahaisystems.com. Reply STOP if you'd prefer we not follow up.</p>
  </div></body></html>`;

  const text = `Hi ${firstName},\n\n${intro}\n\n${q.packageName ? `${q.packageName} — indicative starting point ${q.priceFromDisplay}${q.totalWeeks ? `, ~${q.totalWeeks} weeks` : ""} (confirmed on a call).\n\n` : ""}${firstStep}\n\nA few quick questions:\n${questions.map((qq) => `- ${qq}`).join("\n")}\n\nJust reply with whatever you know, or share a couple of times for a short call.\n\nWarm regards,\nThe GrahAI Systems team\nhttps://grahaisystems.com`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [lead.email],
      reply_to: INBOX,
      subject: `Re: your ${lead.quote?.packageName || "AI project"} — let's find the right first step`,
      html,
      text,
    }),
  });
}

async function sendFounderNotification(lead, id) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[leads] new lead (no email configured):", lead.email, lead.quote?.packageName);
    return;
  }
  const q = lead.quote || {};
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [INBOX],
      reply_to: lead.email,
      subject: `New lead — ${q.packageName || "AI project"} — ${lead.name || lead.email} (${lead.country || "?"})`,
      text:
        `A prospect auto-reply has already been sent. Track & convert at https://grahaisystems.com/admin/leads\n\n` +
        `Email: ${lead.email}\nName: ${lead.name || "-"}\nCompany: ${lead.company || "-"}\n` +
        `Country: ${lead.country}\nUse case: ${lead.useCase || "-"}\nScale: ${lead.scale || "-"}\nUrgency: ${lead.urgency || "-"}\n\n` +
        `Requirements:\n${lead.requirements}\n\n` +
        `Quoted: ${q.packageName} — ${q.priceFromDisplay}, ${q.totalWeeks} weeks (${q.paymentMode === "full" ? "pay in full" : "deposit"} ${q.payNowDisplay}).\n` +
        (id ? `\nLead id: ${id}` : ""),
    }),
  });
}
