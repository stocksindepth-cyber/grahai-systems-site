"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Products", href: "/#products" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "mailto:support@grahai.com" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="GrahAI Systems home"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-slate-900 ring-1 ring-slate-900/10 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="GrahAI Systems logo"
              fill
              sizes="32px"
              className="object-contain p-1 invert"
              priority
            />
          </div>
          <span className="font-display text-sm font-bold tracking-tight text-slate-900 sm:text-base">
            GrahAI <span className="font-light text-slate-500">Systems</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-500 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="whitespace-nowrap hover:text-slate-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://www.grahai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
          >
            GrahAI <ArrowUpRight size={12} />
          </a>
          <a
            href="https://www.applyvita.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            ApplyVita <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/50 bg-white px-4 py-6 space-y-4">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-200/50 flex flex-col gap-3">
            <a
              href="https://www.grahai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Visit GrahAI <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.applyvita.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Visit ApplyVita <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
