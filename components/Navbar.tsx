"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import {
  SectionId,
  sectionIds,
  useActiveSection,
} from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { MoonIcon, SunIcon } from "@/components/icons";
import Image from "next/image";
import { scrollToSection } from "@/lib/scrollToSection";

const labels: Record<SectionId, string> = {
  hero: "Home",
  about: "About",
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
  education: "Education",
  contact: "Contact",
};

export function Navbar() {
  const activeSection = useActiveSection();
  const progress = useScrollProgress();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setIsDark(nextDark);
  };

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[70] h-1 origin-left bg-accent"
        style={{ width: `${progress * 100}%` }}
      />
      <motion.header
        className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/70 bg-canvas-light/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-canvas-dark/80"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <button
            type="button"
            className="flex items-center gap-1"
            onClick={() => scrollToSection("hero")}
            aria-label="Go to home"
          >
            <Image
              src={profile.heroVisual.src}
              alt={profile.heroVisual.alt}
              width={50}
              height={50}
              className="object-cover"
              priority
            />
            <span className="hidden font-heading text-sm font-bold text-zinc-900 dark:text-zinc-100 sm:block">
              {profile.name}
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {sectionIds.slice(1).map((id) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollToSection(id)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === id
                    ? "bg-accent text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
                }`}
              >
                {labels[id]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-800 dark:text-zinc-200"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-800 dark:text-zinc-200 lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="relative h-4 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? "top-2 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? "top-2 -rotate-45" : "top-4"}`}
                />
              </span>
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="border-t border-zinc-200 bg-canvas-light px-5 py-4 shadow-lift dark:border-zinc-800 dark:bg-canvas-dark lg:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mx-auto grid max-w-6xl gap-1">
                {sectionIds.slice(1).map((id) => (
                  <button
                    type="button"
                    key={id}
                    onClick={() => {
                      scrollToSection(id);
                      setIsOpen(false);
                    }}
                    className={`rounded-md px-3 py-3 text-left text-sm font-medium transition-colors ${
                      activeSection === id
                        ? "bg-accent text-white"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {labels[id]}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
