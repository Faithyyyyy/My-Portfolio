import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../../lib/projects";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "0.68rem",
        fontWeight: 500,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--accent-periwinkle)",
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div
      style={{ height: "1px", background: "var(--border)", margin: "4rem 0" }}
    />
  );
}

// function Screen({ screen, index }) {
//   return (
//     <motion.div
//       {...fadeUp(index * 0.1)}
//       style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "380px",
//           overflow: "hidden",
//           background: "#111",
//         }}
//       >
//         {screen.image ? (
//           <img
//             src={screen.image}
//             alt={screen.caption}
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         ) : (
//           <div
//             style={{
//               width: "100%",
//               height: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "linear-gradient(135deg, #13111f, #0d1220)",
//             }}
//           >
//             <span
//               style={{
//                 fontFamily: "DM Sans, sans-serif",
//                 fontSize: "0.75rem",
//                 color: "var(--text-muted)",
//                 opacity: 0.4,
//                 letterSpacing: "0.08em",
//               }}
//             >
//               Screen {index + 1} — add image
//             </span>
//           </div>
//         )}
//       </div>
//       <p
//         style={{
//           fontFamily: "DM Sans, sans-serif",
//           fontSize: "0.82rem",
//           color: "var(--text-muted)",
//           lineHeight: 1.6,
//           fontStyle: "italic",
//         }}
//       >
//         {screen.caption}
//       </p>
//     </motion.div>
//   );
// }

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-muted)",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        Project not found.{" "}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            color: "var(--accent-periwinkle)",
            cursor: "pointer",
            marginLeft: "0.5rem",
          }}
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Fixed top bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1.25rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(20px)",
          background: "rgba(8,8,8,0.85)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: 0,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--text-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          ← Back
        </button>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--accent-periwinkle)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-lavender)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--accent-periwinkle)")
            }
          >
            Live Site ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div
        style={{
          width: "100%",
          height: "70vh",
          background: "#0d0b1a",
          overflow: "hidden",
          position: "relative",
          marginTop: "54px",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.85,
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(160deg, #0d0b1a 0%, #090d1f 50%, #0e0b1a 100%)",
            }}
          >
            <span
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.1rem",
                color: "var(--accent-lavender)",
                opacity: 0.3,
                letterSpacing: "0.1em",
              }}
            >
              Hero image → /public/projects/{project.slug}.png
            </span>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to top, var(--bg), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "4rem 2rem 8rem",
        }}
      >
        {/* Title */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: "0.5rem" }}>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent-periwinkle)",
              marginBottom: "0.85rem",
            }}
          >
            {project.category}
          </p>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h1>
        </motion.div>

        <Divider />

        {/* Problem */}
        <motion.div {...fadeUp(0.05)}>
          <SectionLabel>The Problem</SectionLabel>
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--text-primary)",
              lineHeight: 1.55,
            }}
          >
            {project.problem}
          </p>
        </motion.div>

        <Divider />

        {/* Context */}
        <motion.div {...fadeUp(0.05)}>
          <SectionLabel>Context — Status Quo</SectionLabel>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.85,
            }}
          >
            {project.context}
          </p>
        </motion.div>

        <Divider />

        {/* Approach */}
        <motion.div {...fadeUp(0.05)}>
          <SectionLabel>Approach</SectionLabel>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.85,
            }}
          >
            {project.approach}
          </p>
        </motion.div>

        <Divider />

        {/* Screens */}
        {/* <motion.div {...fadeUp(0.05)}>
          <SectionLabel>Screens</SectionLabel>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            {project.screens.map((screen, i) => (
              <Screen key={i} screen={screen} index={i} />
            ))}
          </div>
        </motion.div>

        <Divider /> */}

        {/* Metrics */}
        {/* <motion.div {...fadeUp(0.05)}>
          <SectionLabel>Evidence — Data & Metrics</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginBottom: "3rem",
            }}
          >
            {project.metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem 1.5rem",
                  background: "var(--bg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "var(--accent-lavender)",
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    fontWeight: 300,
                    lineHeight: 1.4,
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <SectionLabel>What I Learnt</SectionLabel>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.85,
            }}
          >
            {project.learnings}
          </p>
        </motion.div> */}

        {/* <Divider /> */}

        {/* Bottom CTA */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.75rem 1.75rem",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, var(--accent-purple), var(--accent-periwinkle))",
              color: "#fff",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 500,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              transition: "all 0.25s ease",
              boxShadow: "0 8px 30px rgba(139,92,246,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(139,92,246,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(139,92,246,0.25)";
            }}
          >
            View Live Site ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            GitHub Repo ↗
          </a>
        </div>
      </div>
    </div>
  );
}
