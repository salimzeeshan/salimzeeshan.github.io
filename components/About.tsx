"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

function CountStat({ value, suffix = "" }: { value: number; suffix?: string }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const display = useTransform(
    spring,
    (latest) => `${Math.round(latest)}${suffix}`,
  );

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  return <motion.span>{display}</motion.span>;
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="about" ref={ref} className="section-shell">
      <SectionHeader
        kicker="About"
        title="Frontend craft with product-minded details."
        body={profile.shortBio}
      />
      <div className="flex gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div className="space-y-5">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="section-copy">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.18 + index * 0.08,
                }}
              >
                <div className="font-heading text-3xl font-bold text-accent">
                  {isInView ? (
                    <CountStat value={stat.value} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
