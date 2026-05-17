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
    liveUrl: "",
    githubUrl: "https://github.com/salimzeeshan/genz-news",
    image: "/projects/m4v/genz-news.mp4",
  },
  {
    title: "Arena",
    description:
      "A storefront interface focused on product discovery, animated transitions, and fast checkout paths.",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "Firebase"],
    liveUrl: "https://example.com/motion-commerce",
    githubUrl: "https://github.com/salimzeeshan/motion-commerce",
    image: "/projects/m4v/arena.mp4",
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
