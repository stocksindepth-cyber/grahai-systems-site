import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "AI Agent Development", href: "/ai-agent-development" },
    { label: "AI Chatbots", href: "/ai-chatbot-development" },
    { label: "Workflow Automation", href: "/ai-automation-services" },
    { label: "Document Processing AI", href: "/document-processing-ai" },
    { label: "Enterprise AI Solutions", href: "/enterprise-ai-solutions" },
    { label: "Custom AI SaaS", href: "/custom-ai-saas-development" },
  ];

  const technologies = [
    { label: "OpenAI Integration", href: "/openai-development-company" },
    { label: "Claude AI Integration", href: "/claude-ai-development" },
    { label: "Gemini AI Integration", href: "/gemini-ai-development" },
    { label: "Groq LPU Services", href: "/groq-development-services" },
  ];

  const products = [
    { label: "Grah AI", href: "https://grahai.com?utm_source=grahaisystems.com" },
    { label: "AgencyPitch.io", href: "https://agencypitch.io?utm_source=grahaisystems.com" },
    { label: "AasanKhata.in", href: "https://aasankhata.in?utm_source=grahaisystems.com" },
  ];

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
              Grah AI Systems is a product-first AI engineering company. We design and build high-performance, autonomous AI applications and workflows that replace manual work.
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

          {/* Column 1: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              AI Services
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

          {/* Column 2: Tech Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              AI Engines
            </h4>
            <ul className="mt-4 space-y-2.5">
              {technologies.map((link) => (
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

          {/* Column 3: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Flagship Products
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {currentYear} GrahAI Systems. All rights reserved. Registered in Bengaluru, India.</p>
          <div className="flex gap-4">
            <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-900 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
