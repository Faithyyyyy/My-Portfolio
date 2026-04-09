"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { projects } from "../lib/projects";

function ProjectCard({ project, index, inView }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        // display: "flex",
        // flexDirection: "column",
        gap: "1rem",
      }}
      // className="max-w-6xl mx-auto"
      // style={{ maxWidth: "1152px", margin: "0 auto" }}
    >
      {/* Clickable image → case study */}
      <div
        onClick={() => navigate(`/projects/${project.slug}`)}
        style={{
          width: "100%",
          height: "420px",
          overflow: "hidden",
          background: "#111",
          position: "relative",
          cursor: "pointer",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.category}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.7s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #13111f 0%, #0d1220 100%)",
              flexDirection: "column",
              gap: "0.4rem",
              transition: "background 0.4s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #1c1830 0%, #111828 100%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #13111f 0%, #0d1220 100%)")
            }
          >
            <span
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1rem",
                color: "var(--accent-lavender)",
                opacity: 0.45,
              }}
            >
              {project.title}
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                color: "var(--text-muted)",
                opacity: 0.35,
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Add image → /public/projects/{project.slug}.png
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,8,20,0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(10,8,20,0.45)";
            e.currentTarget.querySelector("span").style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(10,8,20,0)";
            e.currentTarget.querySelector("span").style.opacity = "0";
          }}
        >
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              opacity: 0,
              transition: "opacity 0.3s ease",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "0.6rem 1.4rem",
              borderRadius: "999px",
            }}
          >
            View Case Study
          </span>
        </div>
      </div>

      {/* Label + description + links */}
      <div style={{ paddingTop: "0.15rem" }}>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "0.35rem",
            marginTop: "0.95rem",
          }}
        >
          {project.category}
        </p>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 300,
            color: "var(--text-muted)",
            lineHeight: 1.55,
            marginBottom: "0.85rem",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--accent-periwinkle)",
              letterSpacing: "0.05em",
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
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
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
            GitHub
          </a>
          <button
            onClick={() => navigate(`/projects/${project.slug}`)}
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
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
            Case Study
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "6rem 0 7rem", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            // fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "3rem",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Featured Work
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            columnGap: "3rem",
            rowGap: "4.5rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects > div { padding: 0 1.5rem !important; }
          #projects > div > div[style*="grid"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
