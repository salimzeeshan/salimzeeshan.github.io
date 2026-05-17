"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: profile.linkedInUrl,
    Icon: LinkedInIcon
  },
  {
    label: "GitHub",
    value: "Explore repositories",
    href: profile.githubUrl,
    Icon: GithubIcon
  }
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="contact" ref={ref} className="bg-zinc-950 text-white dark:bg-black">
      <div className="section-shell text-center">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Contact
        </motion.p>
        <motion.h2
          className="mx-auto max-w-3xl font-heading text-3xl font-bold sm:text-5xl"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          Let&apos;s build a frontend that feels as good as it looks.
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
        >
          I&apos;m open to frontend engineering roles, product UI work, and
          teams that value thoughtful implementation.
        </motion.p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactMethods.map(({ label, value, href, Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-lg border border-white/10 bg-white/5 p-6 text-left transition-colors hover:border-accent hover:bg-accent/10"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.08 }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="mt-5 block font-heading text-xl font-bold">{label}</span>
              <span className="mt-2 block text-sm text-zinc-300">{value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
