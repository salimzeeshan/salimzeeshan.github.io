"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/skills";
import { SectionHeader } from "@/components/SectionHeader";

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="skills" ref={ref} className="bg-white/70 dark:bg-zinc-950/40">
      <div className="section-shell">
        <SectionHeader
          kicker="Skills"
          title="Tools I use to build clear, fast interfaces."
          body="No arbitrary percentages, just the practical frontend toolkit I reach for across product work."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="rounded-lg border border-zinc-200 bg-canvas-light p-6 dark:border-zinc-800 dark:bg-canvas-dark"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: groupIndex * 0.08
              }}
            >
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-accent hover:bg-accent hover:text-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : undefined}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: groupIndex * 0.08 + skillIndex * 0.035
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
