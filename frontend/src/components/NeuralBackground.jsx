import React from "react";

// Animated neural network SVG background (premium, subtle)
const NeuralBackground = () => {
  const nodes = Array.from({ length: 22 }, (_, i) => {
    const x = (i * 137) % 100;
    const y = (i * 211) % 100;
    return { x, y, r: 1.2 + ((i * 7) % 3) * 0.6, delay: (i % 7) * 0.4 };
  });

  // Build a few connection lines between near nodes
  const edges = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < 22) {
        edges.push([nodes[i], nodes[j]]);
      }
    }
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      data-testid="neural-bg"
    >
      {/* Aurora orbs */}
      <div
        className="aurora-orb"
        style={{
          width: 520,
          height: 520,
          background: "#00F0FF",
          top: -160,
          left: -120,
          opacity: 0.18,
        }}
      />
      <div
        className="aurora-orb"
        style={{
          width: 620,
          height: 620,
          background: "#00FF66",
          bottom: -220,
          right: -180,
          opacity: 0.13,
        }}
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00FF66" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00FF66" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {edges.map(([a, b], idx) => (
          <line
            key={idx}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#lineGrad)"
            strokeWidth="0.08"
            opacity="0.6"
          />
        ))}

        {nodes.map((n, idx) => (
          <circle
            key={idx}
            cx={n.x}
            cy={n.y}
            r={n.r * 0.35}
            fill="url(#nodeGrad)"
            style={{
              animation: `float ${4 + (idx % 5)}s ease-in-out ${n.delay}s infinite`,
              transformOrigin: "center",
            }}
          />
        ))}
      </svg>

      {/* Grid overlay */}
      <div className="absolute inset-0 neural-grid opacity-60" />
      {/* Radial dark mask to focus content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,10,0) 0%, rgba(10,10,10,0.65) 60%, rgba(10,10,10,0.95) 100%)",
        }}
      />
    </div>
  );
};

export default NeuralBackground;
