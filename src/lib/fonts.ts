import localFont from "next/font/local";

/**
 * Self-hosted variable fonts (no runtime dependency on Google's font CDN).
 * Fraunces — the display/headline face: a soft, high-contrast serif with real character.
 * Inter — the workhorse UI/body face: neutral, legible at small sizes.
 * Both are open-source (SIL Open Font License).
 */
export const fraunces = localFont({
  src: [
    {
      path: "../assets/fonts/Fraunces-Variable.ttf",
      style: "normal",
    },
    {
      path: "../assets/fonts/Fraunces-Italic-Variable.ttf",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const inter = localFont({
  src: "../assets/fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
});
