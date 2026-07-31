"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Mail } from "lucide-react";
import Toast from "@/components/Toast";

type Status = "idle" | "submitting" | "success";

export default function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [showToast, setShowToast] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    // No backend wired up yet — simulate a brief request and confirm locally.
    // Replace this block with a real API call (e.g. POST /api/subscribe) later.
    window.setTimeout(() => {
      setStatus("success");
      setShowToast(true);
      setEmail("");

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setShowToast(false), 3500);

      window.setTimeout(() => setStatus("idle"), 2200);
    }, 650);
  }

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-2"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            id="email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-navy/60 py-3 pl-11 pr-4 font-sans text-sm text-cream placeholder:text-muted/70 backdrop-blur-md transition-colors focus:border-gold/50 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold-bright px-6 py-3 font-sans text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70"
        >
          {status === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Notify Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </motion.form>

      <p className="mt-3 text-center font-sans text-xs text-muted">
        No spam — just news the moment we launch.
      </p>

      <Toast message="Thanks! We'll notify you." show={showToast} />
    </>
  );
}
