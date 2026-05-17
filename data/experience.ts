import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "OnArrival Travel",
    role: "Frontend Engineer",
    duration: "May 2025 - Nov 2025",
    location: "Remote",
    description: "",
    bullets: [
      "Implemented SSR in Next.js for SEO-critical and content-heavy pages to improve the initial load experience of the web app.",
      "Optimized rendering performance using memoization, virtualization, and state isolation techniques, reducing unnecessary re-renders across data-heavy pages.",
      "Worked within a monorepo architecture managing multiple production applications for enterprise clients (Bajaj, Niyo Global, and Jupiter), contributing to shared component systems and scalable frontend architecture.",
    ],
  },
  {
    company: "PlayZap Games",
    role: "Frontend Engineer",
    duration: "May 2023 - May 2025",
    location: "Bengaluru, India",
    description: "",
    bullets: [
      "Improved initial page load performance by optimizing SSR and reducing client-side bundle size.",
      "Designed RESTful APIs in Node.js for authentication, game data management, and transaction workflows.",
      "Built a Node.js-based notification service using node-cron to schedule and send instant notifications to end users via a Telegram bot, supporting both real-time and time-based communication at scale.",
      "Reduced time-to-deploy by 35% through code splitting and lazy loading of heavy components.",
      "Engineered a cross-chain bridging interface to support multi-chain token transfers, reducing manual overhead and support queries.",
      "Integrated environment-aware API toggling (staging ↔ production) via Next.js runtime config, significantly streamlining QA and developer testing processes.",
      "Led and delivered multiple projects solo, managing architecture, UI/UX, and production deployment, resulting in a fully functional, scalable dApp frontend.",
    ],
  },
  {
    company: "Masai School",
    role: "Full Stack Web Developer Trainee",
    duration: "May 2022 - Apr 2023",
    location: "Remote",
    description: "",
    bullets: [],
  },
  {
    company: "XcellGen",
    role: "Frontend Engineer Intern",
    duration: "Jan 2022 - May 2022",
    location: "Remote",
    description:
      "Started with landing pages, small business sites, and UI enhancements for web products.",
    bullets: [
      "Developed and maintained frontend user interfaces using React.js",
      "Participated in user experience design and testing",
    ],
  },
];
