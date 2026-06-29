import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { products as productCatalogue } from "../content/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "AI Agent Development", href: "/solutions/ai-agent-development-company" },
    { label: "RAG & Private GPT", href: "/solutions/rag-development-company" },
    { label: "Workflow Automation", href: "/solutions/ai-workflow-automation-company" },
    { label: "Document Processing", href: "/solutions/ai-document-search" },
    { label: "Internal Copilots", href: "/solutions/internal-knowledge-chatbot" },
    { label: "All AI Solutions", href: "/solutions" },
  ];

  const company = [
    { label: "Case Studies", href: "/case-studies" },
    { label: "The Studio", href: "/#company" },
    { label: "Engineering Blog", href: "/blog" },
    { label: "Book a Discovery Call", href: "/#contact" },
  ];

  const products = productCatalogue.map((p) => ({
    label: `${p.name} · ${p.domain}`,
    href: p.url,
  }));

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-slate-900 ring-1 ring-slate-900/10">
                <Image
                  src="/logo.png"
                  alt="GrahAI Systems logo"
                  fill
                  sizes="36px"
                  className="object-contain p-1 invert"
                />
              </div>
              <span className="font-display text-base font-bold tracking-tight text-slate-900">
                GrahAI <span className="font-light text-slate-500">Systems</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              GrahAI Systems is a product-first AI studio. We design, ship, and operate our own software — used by people and businesses across India and the World.
            </p>
            <div className="mt-6 space-y-2.5 text-xs text-slate-500">
              <p className="inline-flex items-center gap-2">
                <Mail size={12} className="text-azure-600" />
                <a href="mailto:support@grahai.com" className="hover:text-slate-900 transition-colors">
                  support@grahai.com
                </a>
              </p>
              <br />
              <p className="inline-flex items-center gap-2">
                <MapPin size={12} />
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>

          {/* Column 1: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Our Products
            </h4>
            <ul className="mt-4 space-y-2.5">
              {products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              AI Solutions
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal / policy links (also required for payment-partner verification) */}
        <div className="mt-14 border-t border-slate-200 pt-8">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
            {[
              { label: "Contact Us", href: "/contact" },
              { label: "Pricing", href: "/pricing" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Cancellation & Refund", href: "/refund" },
              { label: "Shipping & Delivery", href: "/shipping" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-slate-900 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {currentYear} GrahAI Systems. All rights reserved. Registered in Bengaluru, Karnataka, India.</p>
          <a href="mailto:support@grahai.com" className="hover:text-slate-900 transition-colors">
            support@grahai.com
          </a>
        </div>
      </div>
    </footer>
  );
}
