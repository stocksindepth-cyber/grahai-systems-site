import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// Shared chrome for policy / legal pages (Contact, Terms, Privacy, Refund,
// Shipping, Pricing). Content is passed as structured sections so every page
// reads consistently and stays easy to maintain.
export default function LegalPage({ title, updated, intro, sections, children }) {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-white pt-12 pb-24 sm:pt-16 sm:pb-28">
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={14} /> Back to Homepage
          </Link>

          <h1 className="mt-8 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-2 text-xs font-medium text-slate-400">Last updated: {updated}</p>
          )}
          {intro && <p className="mt-5 text-sm leading-relaxed text-slate-600">{intro}</p>}

          <div className="mt-10 space-y-9">
            {(sections || []).map((s, i) => (
              <section key={i}>
                {s.heading && (
                  <h2 className="font-display text-lg font-bold text-slate-900 sm:text-xl">{s.heading}</h2>
                )}
                <div className="mt-3 space-y-3">
                  {(s.paragraphs || []).map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                  {s.list && (
                    <ul className="mt-2 space-y-2">
                      {s.list.map((li, k) => (
                        <li key={k} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-500" />
                          <span dangerouslySetInnerHTML={{ __html: li }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
            {children}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 text-sm text-slate-600">
            Questions about this policy? Email{" "}
            <a href="mailto:support@grahai.com" className="font-semibold text-azure-600">support@grahai.com</a> and
            we&apos;ll respond within 1–2 business days.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Reused across pages so the legal entity reads identically everywhere.
export const COMPANY = {
  name: "GrahAI Systems",
  email: "support@grahai.com",
  city: "Bengaluru",
  region: "Karnataka",
  country: "India",
  addressLine: "Bengaluru, Karnataka, India",
};
