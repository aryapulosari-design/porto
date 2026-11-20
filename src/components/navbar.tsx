"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DATA } from "@/data/resume";
import { useEffect, useRef, useState } from "react";

const links = [
  { id: "hero", href: "/#hero", label: "Home" },
  { id: "about", href: "/#about", label: "About" },
  { id: "experience", href: "/#experience", label: "Experience" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "certificates", href: "/#certificates", label: "Certificates" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y < 96) {
        setHidden(false);
        lastY = y;
      } else if (Math.abs(y - lastY) > 12) {
        setHidden(y > lastY);
        lastY = y;
      }
      const readingLine = window.innerHeight * 0.42;
      let current = "hero";
      for (const { id } of links) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= readingLine) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header onFocusCapture={() => setHidden(false)} className={`nav-shell sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-3xl rounded-[1.75rem] border border-white/10 bg-card/75 text-foreground shadow-xl shadow-black/20 backdrop-blur-xl md:top-12 md:mt-12 md:rounded-full ${hidden && !menuOpen ? "is-hidden" : ""}`}>
      <a href="#main-content" className="sr-only absolute left-3 top-2 z-10 rounded-lg bg-primary px-3 py-2 font-medium text-primary-foreground focus:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        Skip to content
      </a>
      <Link href="/#hero" aria-label={`${DATA.name} — Home`} className="group absolute -top-9 left-5 z-20 hidden size-11 items-center justify-center rounded-full border-4 border-background bg-white font-mono text-xs font-bold text-primary shadow-lg shadow-black/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:flex">
        AK<span aria-hidden="true" className="absolute -bottom-1.5 right-0 size-2.5 rounded-full bg-primary motion-safe:transition-transform motion-safe:duration-200 group-hover:scale-125" />
      </Link>
      <div className="flex min-h-16 items-center justify-between gap-4 px-3 sm:px-5 md:hidden">
        <Link
          href="/"
          aria-label={`${DATA.name} — Home`}
          onClick={() => setMenuOpen(false)}
          className="group flex min-h-11 min-w-0 items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white font-mono text-xs font-bold text-primary motion-safe:transition-transform motion-safe:duration-200 group-hover:rotate-[-8deg]">AK</span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold leading-tight">Arya Kharisudin</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground min-[400px]:block">Security / Software</span>
          </span>
        </Link>

        <button ref={menuButton} type="button" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 text-sm font-semibold hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <nav aria-label="Main navigation" className="hidden items-center gap-1 p-2 md:flex">
        {links.map(({ id, href, label }) => (
          <Link key={id} href={href} aria-current={active === id ? "location" : undefined} className={`group relative flex h-11 min-w-0 flex-1 items-center justify-center rounded-full px-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${active === id ? "text-primary-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`}>
            {active === id && <span aria-hidden="true" className="nav-active-pill absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/25" />}
            <span className="relative z-10 motion-safe:transition-transform motion-safe:duration-200 group-hover:-translate-y-0.5">{label}</span>
          </Link>
        ))}
      </nav>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav-enter max-h-[70dvh] overflow-y-auto rounded-b-[1.75rem] border-t border-border bg-card/95 px-3 pb-3 pt-2 md:hidden">
          {links.map(({ id, href, label }, index) => (
            <Link key={id} href={href} onClick={() => setMenuOpen(false)} aria-current={active === id ? "location" : undefined} className={`flex min-h-12 items-center justify-between rounded-lg border-b border-border/60 px-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${active === id ? "text-primary" : "text-foreground hover:bg-secondary"}`}>
              <span>{label}</span>
              <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
