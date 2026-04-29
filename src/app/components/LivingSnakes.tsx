"use client";

export default function LivingSnakes() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* SVG filter for neon glow effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="neon-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Full-page animated SVG snakes */}
      <svg
        className="w-full h-full opacity-40"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Snake 1 — top left to bottom right, slow */}
        <path
          d="M -100,150 C 250,-80 400,350 300,550 C 200,750 750,820 1100,1050"
          fill="none"
          stroke="#0077FF"
          strokeWidth="1.2"
          strokeLinecap="round"
          filter="url(#neon-glow-blue)"
          className="snake-path-1"
        />

        {/* Snake 2 — right to left, medium */}
        <path
          d="M 1100,200 C 800,450 600,100 450,400 C 300,700 100,450 -100,550"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="0.8"
          strokeLinecap="round"
          filter="url(#neon-glow-blue)"
          className="snake-path-2"
        />

        {/* Snake 3 — big S shape, faster */}
        <path
          d="M 1100,-150 C 750,180 200,80 400,500 C 600,920 -100,820 -200,1100"
          fill="none"
          stroke="#0077FF"
          strokeWidth="1.6"
          strokeLinecap="round"
          filter="url(#neon-glow-blue)"
          className="snake-path-3"
        />

        {/* Snake 4 — diagonal, accent */}
        <path
          d="M -100,800 C 200,600 500,900 700,500 C 900,100 1100,300 1200,50"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="0.6"
          strokeLinecap="round"
          filter="url(#neon-glow-blue)"
          className="snake-path-4"
        />
      </svg>

      {/* Floating orb — slow, ambient blue glow */}
      <div className="snake-orb-blue" />
    </div>
  );
}
