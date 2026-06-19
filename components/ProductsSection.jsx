import { ArrowUpRight } from "lucide-react";
import { products } from "../content/products";

// Primary section: the four products GrahAI Systems owns and operates.
// This is the heart of the product-first site — each card's "Visit" link
// is the page's main conversion.
export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative border-b border-slate-200/50 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
            WHAT WE BUILD &amp; OPERATE
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Four products. One studio.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            GrahAI Systems is a product company first. We design, ship, and run
            our own software — used by people and businesses across India and the
            World — so we carry the full weight of scale, reliability, and real
            users every single day.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md ${p.accent.hoverBorder}`}
            >
              <div
                className={`pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full ${p.accent.glow} blur-2xl`}
              />
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest ${p.accent.text}`}
                  >
                    {p.badge}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    Owned &amp; Operated
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
                  {p.name}
                </h3>
                <p className={`mt-1 text-sm font-semibold ${p.accent.text}`}>
                  {p.tagline}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {p.blurb}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6 text-sm text-slate-600">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${p.accent.dot}`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-all group-hover:border-transparent group-hover:text-white ${
                    p.id === "grahai"
                      ? "group-hover:bg-azure-600"
                      : p.id === "optionsgyani"
                      ? "group-hover:bg-emerald-600"
                      : p.id === "aasankhata"
                      ? "group-hover:bg-amber-600"
                      : "group-hover:bg-purple-600"
                  }`}
                >
                  Visit {p.domain}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
