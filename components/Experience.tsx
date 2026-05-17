"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const shouldZigzag = experience.length > 3;

  return (
    <section id="experience" ref={ref} className="section-shell">
      <SectionHeader
        kicker="Experience"
        title="A timeline of frontend work and growth."
        body="Recent roles and project environments where I have shaped interfaces, components, and product flows."
      />
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-zinc-200 dark:bg-zinc-800 md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-8">
          {experience.map((item, index) => {
            const isRight = shouldZigzag && index % 2 === 1;

            return (
              <motion.article
                key={`${item.company}-${item.duration}`}
                className={`relative grid gap-4 pl-12 md:grid-cols-2 md:pl-0 ${
                  isRight ? "" : "md:[&>div]:col-start-1"
                }`}
                initial={{ opacity: 0, x: isRight ? 42 : -42 }}
                animate={isInView ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.09 }}
              >
                <span className="absolute left-2.5 top-7 z-10 h-3.5 w-3.5 rounded-full border-4 border-canvas-light bg-accent dark:border-canvas-dark md:left-1/2 md:-translate-x-1/2" />
                <div className={`${isRight ? "md:col-start-2" : "md:pr-12"} ${isRight ? "md:pl-12" : ""}`}>
                  <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lift dark:border-zinc-800 dark:bg-zinc-950">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50">
                          {item.role}
                        </h3>
                        <p className="mt-1 font-semibold text-accent">{item.company}</p>
                      </div>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        {item.duration}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.location}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
