"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const items = [
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.phone.display,
    href: siteConfig.phone.href,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.whatsapp.display,
    href: siteConfig.whatsapp.href,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: siteConfig.email.display,
    href: siteConfig.email.href,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: siteConfig.address.full,
    href: siteConfig.address.mapsHref,
  },
];

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="glass-panel relative mx-auto w-full max-w-4xl overflow-hidden p-6 sm:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-radial-gold opacity-60" />

      <div className="relative mb-8 text-center">
        <p className="eyebrow">Get In Touch</p>
        <h3 className="mt-3 font-display text-2xl font-medium text-cream sm:text-3xl">
          Let&apos;s Talk Property
        </h3>
      </div>

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-start gap-4 rounded-xl border border-white/5 bg-ink/40 p-4 transition-colors hover:border-gold/30 hover:bg-navy-soft"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
              <Icon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {label}
              </span>
              <span className="mt-0.5 block truncate font-sans text-sm font-medium text-cream group-hover:text-gold-bright">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="relative mt-8 flex items-center justify-center gap-4 border-t border-white/5 pt-6">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Vibes Realty on Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 text-gold transition-colors hover:border-gold/50 hover:bg-gold/10"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </motion.div>
  );
}
