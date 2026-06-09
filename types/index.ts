export interface Profile {
  name: string;
  initials: string;
  title: string;
  roles: string[];
  tagline: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  resumeUrl: string;
  heroVisual: {
    src: string;
    alt: string;
  };
  shortBio: string;
  about: string[];
  stats: Array<{
    label: string;
    value: number;
    suffix?: string;
  }>;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  notes?: string;
}
