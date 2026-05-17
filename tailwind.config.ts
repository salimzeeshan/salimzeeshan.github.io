import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#2563EB",
          soft: "#DBEAFE",
          ink: "#1D4ED8"
        },
        canvas: {
          light: "#FAFAFA",
          dark: "#0F0F0F"
        }
      },
      fontFamily: {
        heading: ["var(--font-syne)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 70px rgba(37, 99, 235, 0.18)",
        lift: "0 18px 45px rgba(15, 23, 42, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
