import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mzs-portfolio.vercel.app"),
  title: {
    default: "Mohammad Zeeshan Salim | Frontend Engineer",
    template: "%s | Mohammad Zeeshan Salim"
  },
  icons: {
    icon: [
      {
        url: "/profile.png",
        type: "image/png"
      }
    ],
    apple: "/profile.png"
  },
  description:
    "Frontend engineer portfolio for Mohammad Zeeshan Salim, showcasing React, Next.js, TypeScript, UI engineering, projects, and experience.",
  openGraph: {
    title: "Mohammad Zeeshan Salim | Frontend Engineer",
    description:
      "React, Next.js, TypeScript, and polished frontend engineering portfolio.",
    url: "https://mzs-portfolio.vercel.app",
    siteName: "Mohammad Zeeshan Salim Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mohammad Zeeshan Salim portfolio preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Zeeshan Salim | Frontend Engineer",
    description:
      "React, Next.js, TypeScript, and polished frontend engineering portfolio.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} bg-canvas-light font-body text-zinc-800 antialiased dark:bg-canvas-dark dark:text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
