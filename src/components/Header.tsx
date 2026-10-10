"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Thesis", href: "#thesis" },
  { label: "Method", href: "#method" },
  { label: "Pipra Fish", href: "#fish" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Origin", href: "#origin" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(30,95,194,0.1)] border-b border-[var(--border)]"
          : "bg-white border-b border-[var(--border)]"
      }`}
    >
      <div className="container-pipra">
        <div className="flex h-[4.5rem] sm:h-20 items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center h-full group focus-visible:outline-2 focus-visible:outline-blue-500 rounded-sm"
            aria-label="Pipra — Return to top"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Pipra Official Logo"
              width={80}
              height={80}
              priority
              className="h-full w-auto object-contain mix-blend-multiply transition-smooth group-hover:opacity-90"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] rounded-lg hover:bg-[var(--surface-alt)] transition-smooth group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#dialogue"
              className="hidden sm:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              Institutional Dialogue
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface-alt)] transition-smooth"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[65px] sm:top-[81px] bottom-0 bg-white z-50 flex flex-col px-6 py-8 border-t border-[var(--border)] overflow-y-auto md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="flex items-center gap-3 py-4 px-4 rounded-xl text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-[var(--surface-alt)] transition-smooth border-b border-[var(--border)] last:border-0"
                >
                  <span className="text-xs font-mono text-[var(--muted-light)]">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-6 mt-4">
                <a
                  href="#dialogue"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Institutional Dialogue
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
