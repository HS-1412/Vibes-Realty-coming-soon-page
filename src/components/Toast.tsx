"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string;
  show: boolean;
}

export default function Toast({ message, show }: ToastProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <AnimatePresence>
        {show && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="glass-panel flex items-center gap-2.5 border-gold/30 px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          >
            <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-gold" />
            <span className="font-sans text-sm font-medium text-cream">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
