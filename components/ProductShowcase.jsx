"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { products } from "../content/products";

// Hero visual: a 2x2 wall of the live products with a spotlight that
// cycles through them, surfacing one product's detail at a time.
export default function ProductShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const current = products[active];

  return (
    <div className="glass rounded-2xl border border-slate-200/80 p-5 shadow-xl relative overflow-hidden bg-white sm:p-6">
      <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-azure-500/5 blur-[60px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
            Live Products
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900">
            Software we own &amp; operate
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          4 Live
        </span>
      </div>

      {/* Product wall */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {products.map((p, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={p.id}
              type="button"
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              onClick={() => setActive(idx)}
              className={`relative flex flex-col items-start rounded-xl border p-3.5 text-left transition-all duration-300 focus:outline-none ${
                isActive
                  ? `${p.accent.chipBorder} ${p.accent.chipBg} shadow-md ring-1 ${p.accent.ring}`
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <span
                className={`mb-2 h-2 w-2 rounded-full ${p.accent.dot} transition-transform ${
                  isActive ? "scale-125" : ""
                }`}
              />
              <span
                className={`text-sm font-bold text-slate-900 ${p.accent.hoverText} transition-colors`}
              >
                {p.name}
              </span>
              <span className="mt-0.5 text-[10px] font-medium text-slate-400">
                {p.domain}
              </span>
            </button>
          );
        })}
      </div>

      {/* Spotlight detail */}
      <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/60 p-4">
        <div className="flex items-center justify-between">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${current.accent.text}`}
          >
            {current.badge}
          </span>
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 text-xs font-bold text-slate-700 ${current.accent.hoverText} transition-colors`}
          >
            Visit {current.domain}
            <ArrowUpRight size={13} />
          </a>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          {current.tagline}.
        </p>

        {/* Progress dots */}
        <div className="mt-3 flex items-center gap-1.5">
          {products.map((p, idx) => (
            <span
              key={p.id}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === active ? `w-6 ${p.accent.dot}` : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
