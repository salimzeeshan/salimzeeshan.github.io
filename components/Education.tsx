"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/data/education";
import { SectionHeader } from "@/components/SectionHeader";

export function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="education" ref={ref} className="section-shell">
      <SectionHeader
        kicker="Education"
        title="Learning foundations and ongoing practice."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={`${item.institution}-${item.duration}`}
            className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
          >
            <p className="text-sm font-semibold text-accent">{item.duration}</p>
            <h3 className="mt-3 font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50">
              {item.institution}
            </h3>
            <p className="mt-2 font-medium text-zinc-700 dark:text-zinc-200">
              {item.degree}
            </p>
            {item.notes ? (
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {item.notes}
              </p>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
