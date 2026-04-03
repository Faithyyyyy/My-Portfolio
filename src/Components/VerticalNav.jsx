const navItems = [
  { label: "My Works", href: "#projects" },
  { label: "About Me", href: "#aboutus" },
  { label: "Technologies", href: "#tech" },
];

export default function VerticalNav() {
  return (
    <div
      className="vertical-nav"
      style={{
        position: "absolute",
        right: "3rem",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        zIndex: 10,
      }}
    >
      {navItems.map((item, i) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Nav link */}
          <a
            href={item.href}
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap",
              //   writingMode: "vertical-rl",
              textOrientation: "mixed",
              //   transform: "rotate(180deg)",
              padding: "0.5rem 0",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-lavender)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
            }
          >
            {item.label}
          </a>

          {/* Connecting line — shown after every item except the last */}
          {i < navItems.length - 1 && (
            <div
              style={{
                width: "1px",
                height: "48px",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
              }}
            />
          )}
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .vertical-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}
