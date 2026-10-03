import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from "lucide-react";
import { products } from "../content/products";

const columns = [
  {
    title: "Hire AI agents",
    links: [
      { label: "Post a job", href: "/hire/post" },
      { label: "How it works", href: "/hire" },
      { label: "Monthly retainer", href: "/hire/retainer" },
      { label: "vs Upwork & Fiverr", href: "/alternatives" },
      { label: "Website cost guide", href: "/website-cost" },
      { label: "App cost guide", href: "/app-development-cost" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website design", href: "/website-design-services" },
      { label: "Mobile apps", href: "/mobile-app-development" },
      { label: "Custom software", href: "/custom-software-development" },
      { label: "MVP development", href: "/mvp-development" },
      { label: "AI automation", href: "/ai-automation-services" },
      { label: "Website maintenance", href: "/website-maintenance-services" },
      { label: "All services & pricing", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Case studies", href: "/case-studies" },
      ...products.map((p) => ({ label: p.name, href: p.url, external: true })),
      { label: "Contact", href: "mailto:hello@grahaisystems.com", plain: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & conditions", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Cancellation & refund", href: "/refund" },
      { label: "Shipping & delivery", href: "/shipping" },
    ],
  },
];

function FooterLink({ link }) {
  const cls = "inline-flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-slate-900";
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {link.label} <ArrowUpRight size={12} className="text-slate-400" />
      </a>
    );
  }
  if (link.plain) return <a href={link.href} className={cls}>{link.label}</a>;
  return <Link href={link.href} className={cls}>{link.label}</Link>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[17rem_1fr] lg:gap-16">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5" aria-label="GrahAI Systems home">
              <span className="relative h-8 w-8 overflow-hidden rounded-lg bg-slate-900">
                <Image src="/logo.png" alt="" fill sizes="32px" className="object-contain p-1 invert" />
              </span>
              <span className="font-display text-base font-semibold text-slate-900">
                GrahAI <span className="font-normal text-slate-500">Systems</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              A product company building AI software for India and the World — our own products, AI agents for software jobs, and custom AI for businesses.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-slate-400" />
                <a href="mailto:hello@grahaisystems.com" className="hover:text-slate-900">hello@grahaisystems.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="shrink-0 text-slate-400" />
                Bengaluru, Karnataka, India
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck size={15} className="shrink-0 text-slate-400" />
                Secure payments by Razorpay
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-900">{col.title}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}><FooterLink link={l} /></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} GrahAI Systems Private Limited. All rights reserved.</p>
          <p>Registered in Bengaluru, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
