// src/Components/BlogCover.jsx
// Drop-in cover generator. Usage: <BlogCover post={post} />
// No images needed — renders a unique SVG cover per post automatically.

const TAG_CONFIG = {
  Engineering: {
    accent: "#fb923c",
    accentDim: "rgba(251,146,60,0.15)",
    accentBorder: "rgba(251,146,60,0.25)",
    pattern: "grid",
  },
  AI: {
    accent: "#a78bfa",
    accentDim: "rgba(167,139,250,0.15)",
    accentBorder: "rgba(167,139,250,0.25)",
    pattern: "dots",
  },
  Writing: {
    accent: "#93c5fd",
    accentDim: "rgba(147,197,253,0.12)",
    accentBorder: "rgba(147,197,253,0.25)",
    pattern: "lines",
  },
  Frontend: {
    accent: "#6ee7b7",
    accentDim: "rgba(110,231,183,0.12)",
    accentBorder: "rgba(110,231,183,0.25)",
    pattern: "circles",
  },
};

const DEFAULT_CONFIG = {
  accent: "#a78bfa",
  accentDim: "rgba(167,139,250,0.15)",
  accentBorder: "rgba(167,139,250,0.25)",
  pattern: "dots",
};

// Grid pattern — Engineering
function GridPattern({ accent }) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            stroke={accent}
            strokeWidth="0.4"
            opacity="0.25"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      {/* Corner accent lines */}
      <line
        x1="0"
        y1="0"
        x2="60"
        y2="0"
        stroke={accent}
        strokeWidth="1.5"
        opacity="0.5"
      />
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="60"
        stroke={accent}
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
}

// Dots pattern — AI
function DotsPattern({ accent }) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill={accent} opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

// Horizontal lines — Writing
function LinesPattern({ accent }) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="lines"
          width="100%"
          height="22"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="21"
            x2="100%"
            y2="21"
            stroke={accent}
            strokeWidth="0.4"
            opacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lines)" />
    </svg>
  );
}

// Concentric circles — Frontend
function CirclesPattern({ accent }) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {[60, 100, 140, 185, 235].map((r, i) => (
        <circle
          key={i}
          cx="88%"
          cy="50%"
          r={r}
          fill="none"
          stroke={accent}
          strokeWidth="0.5"
          opacity={0.18 - i * 0.025}
        />
      ))}
    </svg>
  );
}

function Pattern({ type, accent }) {
  if (type === "grid") return <GridPattern accent={accent} />;
  if (type === "lines") return <LinesPattern accent={accent} />;
  if (type === "circles") return <CirclesPattern accent={accent} />;
  return <DotsPattern accent={accent} />;
}

export default function BlogCover({ post, style = {} }) {
  const config = TAG_CONFIG[post.tag] || DEFAULT_CONFIG;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#0a0a0f",
        border: `1px solid ${config.accentBorder}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "1.5rem",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {/* Background pattern */}
      <Pattern type={config.pattern} accent={config.accent} />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, #0a0a0f 40%, transparent 100%)`,
          pointerEvents: "none",
        }}
      />

      {/* Accent glow blob */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "55%",
          height: "80%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${config.accentDim} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Tag pill */}
        <span
          style={{
            display: "inline-block",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.2rem 0.65rem",
            borderRadius: "999px",
            background: config.accentDim,
            border: `1px solid ${config.accentBorder}`,
            color: config.accent,
            marginBottom: "0.6rem",
          }}
        >
          {post.tag}
        </span>

        {/* Title */}
        <p
          style={{
            fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
            fontWeight: 600,
            color: "#ffffff",
            margin: "0 0 0.35rem",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            maxWidth: "80%",
          }}
        >
          {post.title}
        </p>

        {/* Date */}
        <p
          style={{
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.35)",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          {post.date}
        </p>
      </div>
    </div>
  );
}
