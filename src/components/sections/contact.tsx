"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";
import { siteConfig } from "@/data/nav";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Give it a short subject"),
  message: z.string().min(10, "Tell me a little more about the project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function openMailClient(url: string) {
  window.location.href = url;
}

const contactCards = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: FaGithub, label: "GitHub", value: "github.com/Shankar997", href: siteConfig.github },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Message me", href: "https://wa.me/917015034609" },
  { icon: Calendar, label: "Book a call", value: "Calendly", href: siteConfig.calendlyUrl },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (values: ContactFormValues) => {
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(body)}`;
    openMailClient(mailto);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" aria-label="Contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Contact"
          title="Let's build something amazing"
          description="Have a project in mind, or just want to say hi? My inbox is open."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.06, 0.1)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <GlassCard className="flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{card.label}</p>
                    <p className="text-sm font-medium">{card.value}</p>
                  </div>
                </GlassCard>
              );
              return (
                <motion.div key={card.label} variants={fadeUp}>
                  {card.href ? (
                    <a href={card.href} target="_blank" rel="noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" {...register("name")} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project inquiry" {...register("subject")} />
                  {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    {...register("message")}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <MagneticButton type="submit" variant="primary" className="w-fit">
                  <span className="inline-flex items-center gap-2">
                    {isSubmitting ? "Opening email…" : "Send Message"}
                    <Send className="h-4 w-4" />
                  </span>
                </MagneticButton>
                {submitted && (
                  <p className="text-sm text-emerald-500 dark:text-emerald-400">
                    Your email app should be opening now — thanks for reaching out!
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
