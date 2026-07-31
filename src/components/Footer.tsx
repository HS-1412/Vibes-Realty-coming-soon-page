import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center sm:px-8">
        <p className="font-sans text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="font-sans text-xs text-muted/70">
          {siteConfig.tagline} — {siteConfig.address.line3}
        </p>
      </div>
    </footer>
  );
}
