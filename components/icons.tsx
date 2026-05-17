import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.47.08.64-.2.64-.45v-1.62c-2.61.57-3.16-1.11-3.16-1.11-.43-1.1-1.05-1.39-1.05-1.39-.86-.59.06-.58.06-.58.95.07 1.45.98 1.45.98.85 1.45 2.22 1.03 2.76.79.08-.61.33-1.03.6-1.27-2.08-.24-4.27-1.04-4.27-4.64 0-1.03.37-1.86.97-2.52-.1-.24-.42-1.2.09-2.49 0 0 .79-.25 2.6.96A8.96 8.96 0 0 1 12 7.34c.8 0 1.6.11 2.35.32 1.8-1.21 2.6-.96 2.6-.96.51 1.29.19 2.25.09 2.49.61.66.97 1.49.97 2.52 0 3.61-2.19 4.4-4.28 4.63.34.29.64.86.64 1.74v2.58c0 .25.17.54.65.45A9.5 9.5 0 0 0 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 5h5v5M19 5l-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.5 9.5H3.8v10h2.7v-10Z" fill="currentColor" />
      <path
        d="M5.15 8.12a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22Z"
        fill="currentColor"
      />
      <path
        d="M10.9 9.5H8.31v10h2.7v-5.22c0-1.4.66-2.23 1.88-2.23 1.09 0 1.61.77 1.61 2.23v5.22h2.7v-5.91c0-2.67-1.43-4.31-3.72-4.31-1.15 0-1.98.45-2.5 1.18h-.08V9.5Z"
        fill="currentColor"
      />
      <path
        d="M3 3.5h18v17H3v-17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 15.5A8.5 8.5 0 0 1 8.5 4a7 7 0 1 0 11.5 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
