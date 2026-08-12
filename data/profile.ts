import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Zeeshan Salim",
  initials: "MZS",
  title: "Frontend-focused Fullstack Developer",
  roles: ["Frontend Engineer", "React Developer", "UI Engineer"],
  tagline:
    "I build polished, responsive and accessible web interfaces that feel fast, clear, and quietly delightful.",
  email: "zeeshansalim541@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/zeeshansalim",
  githubUrl: "https://github.com/salimzeeshan",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1TNP6fSR43CrGurQFYDB2OPHJDjZjmZqb",
  heroVisual: {
    src: "/profile.png",
    alt: "Mohammad Zeeshan Salim",
  },
  shortBio:
    "Frontend focused Full Stack Developer with 3 years of experience building scalable web applications using React.js, Next.js, TypeScript, JavaScript, HTML5, and CSS3. I design and ship high-performance, accessible, and data driven user interfaces in fast-paced startup environments, collaborating in Agile teams.",
  about: [
    "I have shipped production interfaces across gaming platforms, fintech products, and web apps, owning work end-to-end from system design and API integration to UI implementation and deployment.",
    "My day-to-day involves React, Next.js, and TypeScript with a strong focus on performance, SSR optimization, bundle size reduction, memoization, and Core Web Vitals. I have worked in monorepo architectures, integrated REST and GraphQL APIs, written unit tests with Jest, and built everything from blockchain wallet UIs, flight booking systems, to i18n-ready Telegram apps. I like teams that move fast, care about code quality, and treat frontend as a first-class part of the product.",
  ],
  stats: [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Shipped", value: 15, suffix: "+" },
    { label: "Companies", value: 3 },
  ],
};
