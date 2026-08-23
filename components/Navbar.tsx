"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { nav, site } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.06] dark:border-white/[0.06] bg-bg/80 dark:bg-bg-dark/80 backdrop-blur-md">
      <div className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-accent dark:text-accent-dark">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted dark:text-ink-muted-dark transition-colors hover:text-accent dark:hover:text-accent-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="hidden sm:inline-flex lg:hidden xl:inline-flex btn-primary">
            Get in touch
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-white/10"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/[0.06] dark:border-white/[0.06] px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink-muted dark:text-ink-muted-dark"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-fit">
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
