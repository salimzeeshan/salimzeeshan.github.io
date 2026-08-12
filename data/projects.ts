import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Gen-Z News",
    description:
      "A mobile news app that rewrites trending articles in Gen Z language, making current affairs fun, digestible, and actually readable. Think InShorts meets brainrot.",
    techStack: [
      "React Native",
      "React",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "Express",
      "Groq",
      "node-cron",
    ],
    githubUrl: "https://github.com/salimzeeshan/genz-news",
    image: "/projects/m4v/genz-news.mp4",
  },
  {
    title: "Flames CLAT",
    description:
      "A production-ready online coaching platform for CLAT, AILET, and law entrance aspirants. Built with public course pages, quizzes, blogs, student authentication, purchase flows, and an admin dashboard for managing courses, toppers, experts, success stories, YouTube links, news spotlights, coupons, and users.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Radix UI",
      "Lucide React",
      "Swiper",
      "REST APIs",
    ],
    liveUrl: "https://flamesclat.com/",
    githubUrl: "",
    image: "/projects/m4v/flames-clat.mp4",
  },
  {
    title: "Arena - Gaming Platform",
    description:
      "Architected and developed ARENA, an interactive HTML5 gaming platform within the PlayZap ecosystem, serving 10,000+ registered users and thousands of monthly active players. (Must use VPN to access in India due to RMG ban)",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "Firebase"],
    liveUrl: "https://arena.playzap.games/",
    image: "/projects/m4v/arena.mp4",
  },
  {
    title: "Niyo Global PWA - Mobile",
    description:
      "A mobile-first PWA for Niyo Global, a flight booking platform. I built the app in a monorepo architecture using React.js, TypeScript, and Tailwind CSS, and Material UI integrating REST APIs for authentication, account management, and transactions.",
    techStack: [
      "React",
      "Material UI",
      "Tailwind CSS",
      "TypeScript",
      "REST APIs",
    ],
    liveUrl: "https://niyo.onarrival.travel/",
    image: "/projects/m4v/niyo_global.mp4",
  },
  {
    title: "Nike",
    description:
      "A clone of the official Nike, Inc website with authentication and cart + checkout functionality. Made in 2 weeks with tech stacks such as React js, Redux, Next js for the frontend, MongoDB, Atlas, Firestore for the backend and Firebase for authentication.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "MongoDB",
      "Firebase",
      "Firestore",
    ],
    liveUrl: "https://nike-lyart.vercel.app/",
    githubUrl: "https://github.com/salimzeeshan/nike",
    image: "/projects/m4v/nike.mp4",
  },
  {
    title: "Task Manager",
    description:
      "A Vite + React task manager with mocked authentication and task APIs. The app includes a protected dashboard, task CRUD flows, status filtering, form validation, local auth persistence, and a full Vitest test setup.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "MSW",
      "Tailwind CSS",
      "Formik",
      "Yup",
    ],
    liveUrl: "https://task-manager-meatec.netlify.app/",
    githubUrl: "https://github.com/salimzeeshan/task-manager-meatec",
    image: "/projects/TaskManager.png",
  },
];
