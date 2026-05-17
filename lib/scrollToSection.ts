import type { SectionId } from "@/hooks/useActiveSection";

export function scrollToSection(id: SectionId) {
  const section = document.getElementById(id);

  if (!section) {
    return;
  }

  const topOffset = id === "hero" ? 0 : 58;
  const top = section.getBoundingClientRect().top + window.scrollY - topOffset;

  window.scrollTo({ top, behavior: "smooth" });
}
