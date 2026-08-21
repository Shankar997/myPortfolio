import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { CursorGlow } from "@/components/shared/cursor-glow";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { SkipLink } from "@/components/layout/skip-link";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-accent",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://shankar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shankar — Senior Frontend Developer",
    template: "%s · Shankar",
  },
  description:
    "Shankar is a Senior Frontend Developer with 6+ years of experience building modern, scalable, accessible web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Shankar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Shankar" }],
  creator: "Shankar",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Shankar — Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 6+ years of experience building modern, scalable, accessible web applications.",
    siteName: "Shankar — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shankar — Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 6+ years of experience building modern, scalable, accessible web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shankar",
  jobTitle: "Senior Frontend Developer",
  url: siteUrl,
  email: "mailto:shankar300597@gmail.com",
  sameAs: ["https://github.com/Shankar997"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ambala",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScroll>
            <SkipLink />
            <Navbar />
            <CursorGlow />
            <main id="main-content">{children}</main>
            <Footer />
            <BackToTop />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
