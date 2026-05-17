"use client";

import { useEffect, useState } from "react";

export const sectionIds = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact"
] as const;

export type SectionId = (typeof sectionIds)[number];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const updateActiveSection = () => {
      const navbarOffset = 96;
      const scrollPosition = window.scrollY + navbarOffset;

      if (window.scrollY < 24) {
        setActiveSection("hero");
        return;
      }

      const currentSection = sectionIds.reduce<SectionId>((current, id) => {
        const section = document.getElementById(id);

        if (!section) {
          return current;
        }

        return section.offsetTop <= scrollPosition ? id : current;
      }, "hero");

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeSection;
}
