"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { name: "Products", href: "/#products" },
  { name: "Hire AI Agents", href: "/hire" },
  { name: "AI Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="GrahAI Systems home">
          <span className="relative h-8 w-8 overflow-hidden rounded-lg bg-slate-900">
            <Image src="/logo.png" alt="GrahAI Systems logo" fill sizes="32px" className="object-contain p-1 invert" priority />
          </span>
          <span className="font-display text-[15px] font-semibold text-slate-900 sm:text-base">
            GrahAI <span className="font-normal text-slate-500">Systems</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="https://www.grahai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
            GrahAI <ArrowUpRight size={13} />
          </a>
          <Link href="/hire/post" className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
            Post a job <ArrowRight size={14} />
          </Link>
        </div>

        <button
          type="button"
          className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-slate-900 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="border-b border-slate-100 py-3.5 text-base font-medium text-slate-700 hover:text-slate-900">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/hire/post" onClick={() => setOpen(false)} className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white">
              Post a job <ArrowRight size={14} />
            </Link>
            <a href="https://www.grahai.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-1 py-2 text-sm font-medium text-slate-600">
              Visit GrahAI <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
