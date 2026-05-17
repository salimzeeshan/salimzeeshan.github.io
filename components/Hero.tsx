"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { scrollToSection } from "@/lib/scrollToSection";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % profile.roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-8 pt-24 sm:px-6 sm:pb-10 lg:px-10 xl:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_26%),linear-gradient(120deg,#FAFAFA,#F4F7FF)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.24),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(20,184,166,0.12),transparent_26%),linear-gradient(120deg,#0F0F0F,#111827)]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-70"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.16) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="mx-auto grid w-full min-w-0 max-w-7xl gap-12 xl:max-w-[88rem] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="min-w-0 max-w-3xl"
        >
          <p className="mb-5 inline-flex max-w-full rounded-full border border-accent/20 bg-white/70 px-4 py-2 text-sm font-semibold text-accent shadow-sm backdrop-blur dark:bg-zinc-950/60">
            Available for frontend roles
          </p>
          <h1 className="max-w-full break-words sm:break-normal font-heading text-[clamp(2.65rem,12vw,4rem)] font-extrabold leading-[1.02] text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-5 flex min-w-0 flex-wrap items-center gap-2 text-xl font-semibold text-zinc-700 dark:text-zinc-200 sm:gap-3 sm:text-3xl">
            <span>{profile.title}</span>
            <span className="text-accent">/</span>
            <span className="relative inline-grid min-w-0 max-w-full overflow-hidden text-accent sm:min-w-[260px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.roles[roleIndex]}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              View Projects
            </button>
            <a
              href={profile.resumeUrl}
              className="w-full rounded-lg border border-zinc-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-zinc-900 backdrop-blur transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-100 sm:w-auto"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="relative hidden aspect-square lg:block"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-12 rounded-full border border-white/40 bg-white/40 shadow-glow backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
            animate={{ rotate: [0, 4, -3, 0], y: [0, -14, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-20 rounded-full border border-accent/25"
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 grid place-items-center"
            animate={{ rotate: [0, 6, -5, 0], y: [0, -6, 8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative h-60 w-60 scale-125 overflow-hidden">
              <Image
                src={profile.heroVisual.src}
                alt={profile.heroVisual.alt}
                fill
                sizes="240px"
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
