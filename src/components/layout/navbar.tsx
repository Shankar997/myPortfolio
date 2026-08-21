"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download, Mail, Menu } from "lucide-react";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSmoothAnchor } from "@/hooks/use-smooth-anchor";
import { navLinks, siteConfig, socialLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

const iconMap = { github: FaGithub, mail: Mail, whatsapp: FaWhatsapp } as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const goTo = useSmoothAnchor();
  const activeId = useActiveSection(navLinks.map((link) => link.href.replace("#", "")));

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <nav
          className={cn(
            "glass flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-shadow duration-300",
            scrolled ? "glow-ring" : "border-transparent bg-transparent backdrop-blur-none"
          )}
        >
          <Link
            href="#home"
            onClick={goTo("#home")}
            className="font-display flex items-center gap-2 text-base font-semibold tracking-tight"
          >
            <span className="font-mono text-accent">{"</>"}</span>
            Shankar
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={goTo(link.href)}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                      isActive && "text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-muted"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-0.5 sm:flex">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Button
                    key={social.href}
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    render={
                      <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} />
                    }
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                );
              })}
              <ThemeToggle />
            </div>

            <Button
              variant="secondary"
              size="sm"
              className="ml-1 hidden rounded-full lg:inline-flex"
              render={<a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" />}
            >
              <Download className="h-3.5 w-3.5" /> Resume
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="rounded-lg lg:hidden" aria-label="Open menu" />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="glass w-full border-none sm:max-w-full"
                showCloseButton
              >
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex h-full flex-col justify-between px-8 py-20">
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <SheetClose
                          render={
                            <Link
                              href={link.href}
                              onClick={goTo(link.href)}
                              className="font-display block py-3 text-3xl font-medium tracking-tight text-foreground/90 transition-colors hover:text-accent"
                            />
                          }
                        >
                          {link.label}
                        </SheetClose>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2">
                    {socialLinks.map((social) => {
                      const Icon = iconMap[social.icon];
                      return (
                        <Button
                          key={social.href}
                          variant="ghost"
                          size="icon"
                          className="rounded-lg"
                          render={
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={social.label}
                            />
                          }
                        >
                          <Icon className="h-4 w-4" />
                        </Button>
                      );
                    })}
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
