"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { useSmoothAnchor } from "@/hooks/use-smooth-anchor";
import { navLinks, siteConfig, socialLinks } from "@/data/nav";

const iconMap = { github: FaGithub, mail: Mail, whatsapp: FaWhatsapp } as const;

export function Footer() {
  const goTo = useSmoothAnchor();

  return (
    <footer className="relative border-t border-border/60 px-6 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <Link href="#home" onClick={goTo("#home")} className="font-display flex items-center gap-2 text-lg font-semibold">
            <span className="font-mono text-accent">{"</>"}</span>
            Shankar
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            Senior Frontend Developer building modern, accessible, high-performance web
            experiences.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={goTo(link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p className="font-mono">Built with Next.js, TypeScript &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
