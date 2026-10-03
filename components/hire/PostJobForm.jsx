"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Lock, Sparkles } from "lucide-react";
import { categories, budgets, timelines } from "../../content/jobCatalog";

const STAGES = [
  "Reading your brief…",
  "Breaking it into deliverables…",
  "Planning the build…",
  "Pricing the job…",
  "Writing your proposal…",
];

export function saveJobLocally(entry) {
  try {
    const list = JSON.parse(localStorage.getItem("gs_hire_jobs") || "[]").filter((j) => j.id !== entry.id);
    list.unshift(entry);
    localStorage.setItem("gs_hire_jobs", JSON.stringify(list.slice(0, 30)));
  } catch {}
}

export default function PostJobForm({
  defaultCategory = "",
  defaultTitle = "",
  defaultBrief = "",
  sample = null,
  source = "",
  heading = "Post your job",
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: defaultTitle,
    description: defaultBrief,
    category: defaultCategory || "",
    budget: "unsure",
    timeline: "flexible",
    name: "",
    email: "",
    website: "",
  });
  const [busy, setBusy] = useState(false);
  const [stage, setStage] = useState(0);
  const [error, setError] = useState("");
  const busyCard = useRef(null);

  useEffect(() => {
    if (!busy) return;
    busyCard.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = setInterval(() => setStage((s) => Math.min(s + 1, STAGES.length - 1)), 3500);
    return () => clearInterval(t);
  }, [busy]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setError("");
    setStage(0);
    setBusy(true);
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, category: form.category || "other", source }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      saveJobLocally({ id: data.id, k: data.key, title: form.title, createdAt: new Date().toISOString() });
      router.push(`/hire/jobs/${data.id}?k=${encodeURIComponent(data.key)}`);
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  const field = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20";
  const label = "mb-1.5 block text-xs font-semibold text-slate-700";

  if (busy) {
    return (
      <div ref={busyCard} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg sm:p-10" aria-live="polite">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-teal-300">
          <Sparkles size={24} className="animate-pulse" />
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-slate-900">An agent is working on your proposal</h3>
        <p className="mt-2 text-sm text-slate-500">This usually takes 20–40 seconds. Don&apos;t close this tab.</p>
        <ol className="mx-auto mt-6 max-w-xs space-y-2 text-left text-sm">
          {STAGES.map((s, i) => (
            <li key={s} className={`flex items-center gap-2.5 ${i < stage ? "text-slate-400" : i === stage ? "font-semibold text-slate-900" : "text-slate-300"}`}>
              {i === stage ? <Loader2 size={14} className="animate-spin text-teal-600" /> : <span className={`h-1.5 w-1.5 rounded-full ${i < stage ? "bg-teal-500" : "bg-slate-200"}`} />}
              {s}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-extrabold text-slate-900">{heading}</h2>
        {sample && (
          <button
            type="button"
            onClick={() => setForm((f) => ({ ...f, title: sample.title, description: sample.brief, category: f.category || defaultCategory }))}
            className="text-xs font-semibold text-teal-700 hover:text-teal-800"
          >
            Fill with an example
          </button>
        )}
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <label htmlFor="job-title" className={label}>Job title</label>
          <input id="job-title" className={field} value={form.title} onChange={set("title")} placeholder="e.g. Shopify store speed fix and custom product page" maxLength={120} required />
        </div>
        <div>
          <label htmlFor="job-desc" className={label}>What do you need done?</label>
          <textarea
            id="job-desc"
            className={`${field} min-h-[150px] resize-y`}
            value={form.description}
            onChange={set("description")}
            placeholder="Describe the outcome you want, what you already have (site, files, accounts, examples), and anything that must be true when it's done. Don't include passwords."
            maxLength={5000}
            required
          />
          <p className="mt-1 text-[11px] text-slate-400">{form.description.length}/5000 · more detail = a sharper price</p>
        </div>
        <div>
          <label htmlFor="job-cat" className={label}>Category</label>
          <select id="job-cat" className={field} value={form.category} onChange={set("category")}>
            <option value="">Choose…</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="job-budget" className={label}>Budget</label>
            <select id="job-budget" className={field} value={form.budget} onChange={set("budget")}>
              {budgets.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="job-when" className={label}>Needed by</label>
            <select id="job-when" className={field} value={form.timeline} onChange={set("timeline")}>
              {timelines.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="job-name" className={label}>Your name <span className="font-normal text-slate-400">(optional)</span></label>
            <input id="job-name" className={field} value={form.name} onChange={set("name")} autoComplete="name" maxLength={80} />
          </div>
          <div>
            <label htmlFor="job-email" className={label}>Email</label>
            <input id="job-email" type="email" className={field} value={form.email} onChange={set("email")} autoComplete="email" placeholder="Where we send your proposal link" maxLength={200} required />
          </div>
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="job-website">Website</label>
          <input id="job-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
        </div>
      </div>

      {error && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}

      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-teal-700/20 transition-colors hover:bg-teal-500">
        Get my fixed-price proposal <ArrowRight size={16} />
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
        <Lock size={11} /> Free to post · no account · you only pay if you accept · from $99
      </p>
    </form>
  );
}
