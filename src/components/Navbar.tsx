"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <Logo size={44} priority className="rounded-full" />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold tracking-wide text-cream sm:text-xl">
              Vibes Realty
            </p>
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted">
              {siteConfig.tagline}
            </p>
          </div>
        </div>

        <a
          href={siteConfig.phone.href}
          className="group flex items-center gap-2 rounded-full border border-gold/30 bg-navy/50 px-3.5 py-2 backdrop-blur-md transition-colors hover:border-gold/60 hover:bg-navy sm:px-4"
        >
          <Phone className="h-3.5 w-3.5 text-gold transition-transform group-hover:scale-110 sm:h-4 sm:w-4" />
          <span className="hidden font-sans text-sm font-medium text-cream sm:inline">
            {siteConfig.phone.display}
          </span>
        </a>
      </div>
    </motion.header>
  );
}
