"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useAuth } from "./AuthProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const navigation = [
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Products", href: "/#products" },
    { name: "Studio", href: "/#company" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="GrahAI Systems home"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-slate-900 ring-1 ring-slate-900/10 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="GrahAI Systems logo"
              fill
              sizes="36px"
              className="object-contain p-1 invert"
              priority
            />
          </div>
          <span className="font-display text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            GrahAI <span className="font-light text-slate-500">Systems</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
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
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href={user ? "/dashboard" : "/login"}
            className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            {user ? "Dashboard" : "Sign in"}
          </Link>
          <a
            href="/start"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-to-br from-azure-600 to-azure-700 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-azure-700/10 hover:from-azure-500 hover:to-azure-600 transition-all"
          >
            Get a Quote
            <ArrowUpRight size={14} />
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
          <div className="pt-4 border-t border-slate-200/50 flex flex-col gap-4">
            <a
              href="mailto:support@grahai.com"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              support@grahai.com
            </a>
            <a
              href="/start"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-azure-600 to-azure-700 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-azure-700/10 hover:from-azure-500 hover:to-azure-600 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
