"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const glassClasses =
  "bg-background/60 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/5";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <>
      {/* ---- Desktop Pill (md+) ---- */}
      <nav
        className={`fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full px-2 py-2 md:flex ${glassClasses}`}
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="rounded-full px-3 py-1.5 font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          BGL<span className="text-accent">.</span>
        </a>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors duration-150 hover:bg-surface/60 hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* ---- Click-outside overlay (mobile) ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ---- Mobile FAB (below md) ---- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:hidden">
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-end gap-2"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{
                    duration: 0.2,
                    delay: (navLinks.length - 1 - index) * 0.05,
                  }}
                  className={`rounded-full px-4 py-2 text-sm text-muted transition-colors duration-150 hover:text-foreground ${glassClasses}`}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-14 w-14 items-center justify-center rounded-full ${glassClasses}`}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="block h-0.5 w-5 rounded-full bg-foreground"
              aria-hidden="true"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-5 rounded-full bg-foreground"
              aria-hidden="true"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="block h-0.5 w-5 rounded-full bg-foreground"
              aria-hidden="true"
            />
          </div>
        </button>
      </div>

      {/* ---- Theme Toggle (always visible, bottom-left) ---- */}
      <button
        onClick={toggle}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-105 active:scale-95"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.svg
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
