"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import EmailSubscribe from "@/components/EmailSubscribe";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-32 sm:px-8"
    >
      <AnimatedBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        <motion.p variants={item} className="eyebrow">
          {siteConfig.name} &middot; Surat
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 text-balance font-display text-4xl font-medium leading-[1.08] text-cream sm:text-6xl md:text-7xl"
        >
          Something{" "}
          <span className="italic text-gold-bright">Exceptional</span> is
          Coming Soon
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-balance font-sans text-base leading-relaxed text-muted sm:text-lg"
        >
          We&apos;re building a premium real estate platform to help you
          discover the finest residential and commercial properties in Surat.
        </motion.p>

        <motion.div variants={item} className="mt-11 w-full">
          <EmailSubscribe />
        </motion.div>
      </motion.div>

      <motion.a
        href="#contact"
        aria-label="Scroll to contact details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-gold"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
