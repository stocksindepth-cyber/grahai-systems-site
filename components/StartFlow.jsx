"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Check,
  Sparkles,
  Loader2,
  ShieldCheck,
  Clock,
  CalendarRange,
  RefreshCw,
  LayoutDashboard,
} from "lucide-react";
import { auth } from "../lib/firebaseClient";
import { useAuth } from "./AuthProvider";

const USE_CASES = [
  "AI Agent",
  "RAG / Knowledge assistant",
  "Workflow automation",
  "Customer support copilot",
  "Document processing",
  "Custom AI SaaS",
  "Not sure yet",
];
const INTEGRATIONS = [
  "CRM (HubSpot/Salesforce)",
  "Slack / Teams",
  "Email",
  "Database / ERP",
  "Website",
  "WhatsApp",
  "Internal docs / wiki",
  "Payments",
];
const URGENCY = ["ASAP", "Within 1–3 months", "This quarter", "Just exploring"];

export default function StartFlow() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState("form"); // form | quote | done
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [quote, setQuote] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    requirements: "",
    scale: "",
    urgency: "",
    integrations: [],
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleIntegration = (i) =>
    setForm((f) => ({
      ...f,
      integrations: f.integrations.includes(i)
        ? f.integrations.filter((x) => x !== i)
        : [...f.integrations, i],
    }));

  async function generate(e) {
    e?.preventDefault();
    setError("");
    if (!form.email || form.requirements.trim().length < 12) {
      setError("Add your email and a sentence or two about what you want to build.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/scope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setQuote(data.quote);
      setStep("quote");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function pay() {
    if (!quote) return;
    setError("");
    setBusy(true);
    try {
      // Generate a Razorpay-hosted payment link and send the user to it.
      const res = await fetch("/api/payment-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: quote.token }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Could not start checkout.");
      window.location.href = data.url; // hosted on Razorpay; redirects back to /start/done
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  // Save the quote to the user's dashboard + kick off proposal generation.
  // If not signed in, stash the quote and route to signup.
  async function saveToDashboard() {
    if (!quote) return;
    const pending = { token: quote.token, quote };
    if (!user) {
      try { sessionStorage.setItem("ghs_pending_quote", JSON.stringify(pending)); } catch {}
      router.push("/login?next=/dashboard");
      return;
    }
    setError("");
    setBusy(true);
    try {
      const idToken = await auth.currentUser.getIdToken();
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${idToken}` },
        body: JSON.stringify(pending),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not save your project.");
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  if (step === "done") {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Check size={28} />
        </div>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-slate-900">You&apos;re booked in 🎉</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Payment confirmed for <span className="font-semibold">{quote?.packageName}</span>. We&apos;ll email{" "}
          <span className="font-semibold">{form.email}</span> within one business day to schedule your kickoff and
          confirm scope.
        </p>
        <a href="/" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 hover:text-azure-700">
          Back to homepage
        </a>
      </div>
    );
  }

  if (step === "quote" && quote) {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-azure-600">
            <Sparkles size={14} /> Your AI-scoped engagement
          </div>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">{quote.packageName}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{quote.summary}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Stat icon={CalendarRange} label="Timeline" value={`~${quote.totalWeeks} weeks`} />
            <Stat icon={Clock} label="Starting price" value={quote.priceFromDisplay.replace("from ", "")} />
            <Stat icon={ShieldCheck} label="Today" value={quote.payNowDisplay} />
          </div>

          {quote.scope?.length > 0 && (
            <div className="mt-7">
              <h3 className="text-sm font-bold text-slate-900">What&apos;s included</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {quote.scope.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 shrink-0 text-azure-600" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {quote.phases?.length > 0 && (
            <div className="mt-7">
              <h3 className="text-sm font-bold text-slate-900">Delivery plan</h3>
              <ol className="mt-3 space-y-3">
                {quote.phases.map((p, i) => (
                  <li key={i} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-azure-600 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {p.name} <span className="font-medium text-slate-400">· {p.weeks} wk</span>
                      </div>
                      <div className="text-xs leading-relaxed text-slate-500">{p.deliverables}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {quote.assumptions?.length > 0 && (
            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              <span className="font-semibold">Assumptions:</span> {quote.assumptions.join(" · ")}
            </p>
          )}

          <div className="mt-6 rounded-2xl border border-azure-100 bg-azure-50/40 p-4 text-xs leading-relaxed text-slate-600">
            This is an <span className="font-semibold">indicative</span> scope generated from what you told us — a
            short discovery call confirms the final scope and price.{" "}
            {quote.paymentMode === "deposit"
              ? "Your booking deposit is credited in full to the project."
              : "Pay in full to lock your build slot."}
          </div>

          {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

          {/* Primary: free — save it, get the full AI proposal, track delivery. */}
          <button
            onClick={saveToDashboard}
            disabled={busy}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-azure-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-azure-600/20 transition-all hover:bg-azure-700 hover:-translate-y-0.5 disabled:opacity-60"
          >
            {busy ? <Loader2 size={16} className="animate-spin" /> : <LayoutDashboard size={16} />}
            Save &amp; get your full proposal — free
          </button>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={pay}
              disabled={busy}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-navy-700/20 bg-white px-6 py-3.5 text-sm font-semibold text-navy-700 transition-all hover:bg-slate-50 disabled:opacity-60"
            >
              <ShieldCheck size={16} />
              {quote.payNowLabel} — {quote.payNowDisplay}
            </button>
            <button
              onClick={() => {
                setStep("form");
                setQuote(null);
                setError("");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              <RefreshCw size={15} /> Adjust
            </button>
          </div>
          <p className="mt-3 text-center text-[11px] text-slate-400">
            Prefer to talk first? Email{" "}
            <a href="mailto:support@grahai.com" className="font-semibold text-azure-600">support@grahai.com</a>.
          </p>
        </div>
      </div>
    );
  }

  // form
  return (
    <form onSubmit={generate} className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
      <div className="grid gap-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name">
            <input className={inp} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Doe" />
          </Field>
          <Field label="Work email" required>
            <input type="email" required className={inp} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" />
          </Field>
        </div>
        <Field label="Company">
          <input className={inp} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Company Inc." />
        </Field>

        <Field label="What kind of AI system?">
          <div className="flex flex-wrap gap-2">
            {USE_CASES.map((u) => (
              <Chip key={u} active={form.useCase === u} onClick={() => set("useCase", u)}>{u}</Chip>
            ))}
          </div>
        </Field>

        <Field label="Describe the problem you want to solve" required>
          <textarea
            required
            rows={4}
            className={inp}
            value={form.requirements}
            onChange={(e) => set("requirements", e.target.value)}
            placeholder="e.g. Our support team answers ~400 repetitive tickets a week from our help docs and order system. We want an AI copilot that deflects the common ones and escalates the rest."
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Scale / volume">
            <input className={inp} value={form.scale} onChange={(e) => set("scale", e.target.value)} placeholder="e.g. 10k docs/mo, 50 staff" />
          </Field>
          <Field label="Timeline">
            <div className="flex flex-wrap gap-2">
              {URGENCY.map((u) => (
                <Chip key={u} active={form.urgency === u} onClick={() => set("urgency", u)}>{u}</Chip>
              ))}
            </div>
          </Field>
        </div>

        <Field label="Systems to connect">
          <div className="flex flex-wrap gap-2">
            {INTEGRATIONS.map((i) => (
              <Chip key={i} active={form.integrations.includes(i)} onClick={() => toggleIntegration(i)}>{i}</Chip>
            ))}
          </div>
        </Field>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-azure-600 to-azure-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-azure-700/10 transition-all hover:from-azure-500 hover:to-azure-600 disabled:opacity-60"
        >
          {busy ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          {busy ? "Scoping your build…" : "Get my instant scope & price"}
          {!busy && <ArrowRight size={16} />}
        </button>
        <p className="text-center text-[11px] text-slate-400">
          No spam. Your details are used only to scope and price your project.
        </p>
      </div>
    </form>
  );
}

const inp =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-azure-500 focus:bg-white focus:outline-none";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label} {required && <span className="text-azure-600">*</span>}
      </span>
      {children}
    </label>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
        active
          ? "border-azure-500 bg-azure-50 text-azure-700"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
      }`}
    >
      {children}
    </button>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-center">
      <Icon size={16} className="mx-auto text-azure-600" />
      <div className="mt-1.5 font-display text-base font-extrabold text-slate-900">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-slate-400">{label}</div>
    </div>
  );
}
