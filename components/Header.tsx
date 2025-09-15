"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About WFT57" },
  { href: "/news", label: "News & Events" },
  { href: "/charities", label: "Charities & Donations" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Log In" },
];

export default function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900/60 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold text-zinc-100">
          <span className="relative h-8 w-8 inline-block">
            <Image src="/images/WFTLogo.webp" alt="WFT57 Logo" fill className="object-contain" sizes="32px" />
          </span>
          <span className="hidden sm:inline">William F. Taylor Lodge #57</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-zinc-300 hover:text-white transition ${active ? "text-white" : ""}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 rounded bg-gradient-to-r from-blue-400 to-amber-300 transition-all ${active ? "w-full" : "w-0 hover:w-full"}`} />
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded bg-white/10 text-white hover:bg-white/15"
          aria-label="Toggle navigation"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900/80">
          <div className="container-max py-3 flex flex-col gap-3">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${active ? "text-white" : "text-zinc-300"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
