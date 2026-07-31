"use client";

/**
 * Decorative, ambient background for the hero.
 *
 * The signature element is a set of concentric "medallion" rings — a beaded
 * gold circle with a broken sapphire arc — drawn straight from the brand
 * mark's own geometry, slowly rotating behind the headline. Paired with soft
 * drifting gradient blobs for depth and a faint skyline silhouette that
 * grounds the page in real estate without leaning on a stock photo.
 */
export default function AnimatedBackground() {
  const dots = Array.from({ length: 28 });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-navy" />

      {/* Drifting glow blobs */}
      <div className="absolute -left-32 top-[-10%] h-[32rem] w-[32rem] rounded-full bg-radial-gold blur-3xl animate-float" />
      <div
        className="absolute right-[-12%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-radial-sky blur-3xl animate-float"
        style={{ animationDelay: "1.8s" }}
      />
      <div
        className="absolute bottom-[-15%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-radial-gold blur-3xl animate-pulse-glow"
        style={{ animationDelay: "0.6s" }}
      />

      {/* Signature medallion motif */}
      <div className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 opacity-70 sm:h-[56rem] sm:w-[56rem]">
        <svg
          viewBox="0 0 600 600"
          className="h-full w-full animate-spin-slow"
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle
            cx="300"
            cy="300"
            r="270"
            fill="none"
            stroke="#C9A24B"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          {dots.map((_, i) => {
            const angle = (i / dots.length) * Math.PI * 2;
            const r = 270;
            const x = Math.round((300 + r * Math.cos(angle)) * 1000) / 1000;
            const y = Math.round((300 + r * Math.sin(angle)) * 1000) / 1000; 
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i % 2 === 0 ? 3.5 : 2}
                fill="#C9A24B"
                fillOpacity="0.45"
              />
            );
          })}
        </svg>

        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 h-full w-full animate-spin-slow-reverse"
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle
            cx="300"
            cy="300"
            r="220"
            fill="none"
            stroke="#5FA8CC"
            strokeOpacity="0.3"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="360 700"
          />
          <circle
            cx="300"
            cy="300"
            r="220"
            fill="none"
            stroke="#E7C877"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Faint skyline silhouette grounding the motif in real estate */}
      <svg
        aria-hidden
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-40 w-full opacity-[0.15] sm:h-56"
      >
        <rect x="60" y="70" width="70" height="150" fill="#C9A24B" />
        <rect x="150" y="30" width="90" height="190" fill="#C9A24B" />
        <rect x="260" y="95" width="55" height="125" fill="#C9A24B" />
        <rect x="880" y="60" width="80" height="160" fill="#C9A24B" />
        <rect x="980" y="20" width="95" height="200" fill="#C9A24B" />
        <rect x="1090" y="85" width="60" height="135" fill="#C9A24B" />
      </svg>

      {/* Subtle grain for texture */}
      <div className="absolute inset-0 bg-noise" />

      {/* Vignette to keep focus centered */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
    </div>
  );
}
