import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { products } from "../content/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const company = [
    { label: "About", href: "/about" },
    { label: "Hire AI Agents", href: "/hire" },
    { label: "Post a job", href: "/hire/post" },
    { label: "Monthly dev retainer", href: "/hire/retainer" },
    { label: "Upwork & Fiverr alternatives", href: "/alternatives" },
    { label: "AI Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "mailto:support@grahai.com" },
  ];

  const legal = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cancellation & Refund", href: "/refund" },
    { label: "Shipping & Delivery", href: "/shipping" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-slate-900 ring-1 ring-slate-900/10">
                <Image
                  src="/logo.png"
                  alt="GrahAI Systems logo"
                  fill
                  sizes="32px"
                  className="object-contain p-1 invert"
                />
              </div>
              <span className="font-display text-sm font-bold tracking-tight text-slate-900">
                GrahAI <span className="font-light text-slate-500">Systems</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              A product company building AI software for India and the World.
              Headquartered in Bengaluru, Karnataka.
            </p>
            <div className="mt-6 space-y-2 text-xs text-slate-500">
              <p className="flex items-center gap-2">
                <Mail size={12} className="text-teal-600 flex-shrink-0" />
                <a href="mailto:support@grahai.com" className="hover:text-slate-900 transition-colors">
                  support@grahai.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={12} className="flex-shrink-0" />
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Our Products</h4>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</h4>
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

            <h4 className="mt-8 text-xs font-bold uppercase tracking-wider text-slate-900">Legal</h4>
            <ul className="mt-4 space-y-2.5">
              {legal.map((link) => (
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

        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col items-start justify-between gap-4 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>© {currentYear} GrahAI Systems. All rights reserved. Registered in Bengaluru, Karnataka, India.</p>
          <a href="mailto:support@grahai.com" className="hover:text-slate-900 transition-colors">
            support@grahai.com
          </a>
        </div>
      </div>
    </footer>
  );
}
