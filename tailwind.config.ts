import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0C1014", // matches the logo's own background exactly
          soft: "#11151C",
        },
        navy: {
          DEFAULT: "#10162A",
          soft: "#141C33",
          border: "#232B41",
        },
        gold: {
          DEFAULT: "#C9A24B",
          bright: "#E7C877",
          dim: "#8C733A",
        },
        cream: "#F3EEDF",
        sky: "#5FA8CC",
        muted: "#8B93A7",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle, rgba(201,162,75,0.35) 0%, rgba(201,162,75,0) 70%)",
        "radial-sky": "radial-gradient(circle, rgba(95,168,204,0.25) 0%, rgba(95,168,204,0) 70%)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 60s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 90s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
