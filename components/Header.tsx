"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { CALL_STELLA_TEXT, PHONE_TEL } from "@/lib/contact";

const links = [
  { href: "/ai-automation/", label: "AI Automation" },
  { href: "/it-support/", label: "IT Support" },
  { href: "/websites/", label: "Websites and SEO" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ background: "rgba(243,235,221,.82)", borderColor: "var(--line)" }}
    >
      <div className="wrap">
        <nav className="flex items-center justify-between py-3 md:py-5">
          <Link href="/" className="flex items-center flex-none">
            <Image src="/CoralStoneLogoNew.svg" alt="Coralstone Services Group" width={102} height={64} className="h-16 md:h-24 w-auto" priority />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-[30px] font-medium text-[1.02rem]">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="text-charcoal/80 hover:text-ink transition">
                  {l.label}
                </Link>
              ))}
            </div>
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label={CALL_STELLA_TEXT}
              className="inline-flex items-center gap-2 rounded-full pl-2 pr-3 py-1.5 text-[.92rem] font-semibold text-ink transition whitespace-nowrap shrink-0 border"
              style={{ borderColor: "var(--line)", background: "var(--paper)" }}
            >
              <span className="flex-none w-6 h-6 rounded-full grid place-items-center" style={{ background: "var(--coral)", color: "#fff" }}>
                <Phone size={12} strokeWidth={2} />
              </span>
              1300 404 523
            </a>
            <Link href="/contact/" className="btn btn-primary shrink-0">Book a free chat</Link>
          </div>
          <button
            type="button"
            className="icon-btn-ghost md:hidden flex-none w-11 h-11 grid place-items-center rounded-full"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </nav>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="md:hidden border-t overflow-hidden"
            style={{ borderColor: "var(--line)" }}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="wrap flex flex-col py-4 gap-1">
              <Link href="/contact/" className="btn btn-primary justify-center mb-3">
                Book a free chat
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                aria-label={CALL_STELLA_TEXT}
                className="flex items-center gap-1.5 py-3 text-[.95rem] font-medium text-charcoal border-b"
                style={{ borderColor: "var(--line)" }}
              >
                <Phone size={15} strokeWidth={1.75} />
                {CALL_STELLA_TEXT}
              </a>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="py-3 text-[1.05rem] font-medium text-charcoal border-b"
                  style={{ borderColor: "var(--line)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
