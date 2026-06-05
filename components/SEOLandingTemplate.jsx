"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronDown, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

export default function SEOLandingTemplate({
  pageTitle,
  pageDescription,
  keywordAccent,
  headline,
  subheadline,
  overviewTitle,
  overviewText,
  featuresTitle,
  features,
  specTitle,
  specs,
  faqs,
}) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Header />
      
      <main className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 min-h-screen bg-slate-50/30">
        {/* Background grids */}
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-azure-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Homepage
            </Link>
          </div>

          {/* Hero Header */}
          <div className="max-w-4xl mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-azure-250 bg-azure-50/80 px-3.5 py-1.5 text-xs font-bold text-azure-600 backdrop-blur-sm shadow-sm">
              <Zap size={12} />
              Professional AI Services Hub
            </div>
            
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.05]">
              {headline} <span className="text-brand-gradient">{keywordAccent}</span>
            </h1>
            
            <p className="mt-6 text-base text-slate-600 leading-relaxed sm:text-lg max-w-3xl">
              {subheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-azure-600 hover:bg-azure-700 px-5 py-3 text-xs font-semibold text-white transition-all hover:scale-[1.01] shadow-md shadow-azure-600/10"
              >
                Book Discovery Meeting
                <ArrowRight size={14} />
              </a>
              <a
                href="#faqs"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              >
                Read FAQs
              </a>
            </div>
          </div>

          {/* Core Overview Section */}
          <section className="py-12 border-t border-slate-200/80 grid gap-10 lg:grid-cols-[1fr_1.5fr] items-start bg-white rounded-3xl p-6 sm:p-10 border border-slate-250/20 shadow-sm mb-12">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900 tracking-tight sm:text-2xl">
                {overviewTitle}
              </h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              {overviewText.map((pText, pIdx) => (
                <p key={pIdx}>{pText}</p>
              ))}
            </div>
          </section>

          {/* Features / Capabilities Grid */}
          <section className="py-16 border-t border-slate-200/50">
            <h2 className="font-display text-xl font-bold text-slate-900 tracking-tight sm:text-2xl mb-10 text-center">
              {featuresTitle}
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="glass rounded-2xl p-6 border border-slate-200 hover:border-azure-500/20 transition-all bg-white shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-azure-50 border border-azure-150 text-azure-600 font-semibold text-xs shadow-sm">
                      {idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-slate-900 text-sm">
                      {feat.name}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-505 text-slate-500">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Specs / Table (Section 3: Technologies or Core Parameters) */}
          {specs && specs.length > 0 && (
            <section className="py-16 border-t border-slate-200/50">
              <h2 className="font-display text-xl font-bold text-slate-900 tracking-tight sm:text-2xl mb-8 text-center">
                {specTitle || "Service Architecture Details"}
              </h2>
              
              <div className="overflow-x-auto max-w-4xl mx-auto border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-md">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-bold">
                      <th className="px-5 py-4">Capability Parameter</th>
                      <th className="px-5 py-4">System Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, sIdx) => (
                      <tr key={sIdx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-4 font-bold text-slate-900">{spec.name}</td>
                        <td className="px-5 py-4 text-slate-600 leading-relaxed">{spec.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Accordion FAQ Section */}
          <section id="faqs" className="py-16 border-t border-slate-200/50 scroll-mt-28">
            <h2 className="font-display text-xl font-bold text-slate-900 tracking-tight sm:text-2xl mb-10 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="glass rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full flex items-center justify-between p-5 text-left text-xs font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-azure-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
