// src/Components/pages/BlogPost.jsx

import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blogData";
import fallbackPostImage from "../../assets/lazy_loading.webp";

const TAG_COLORS = {
  AI: {
    bg: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.3)",
    color: "var(--accent-lavender)",
  },
  Writing: {
    bg: "rgba(96,165,250,0.1)",
    border: "rgba(96,165,250,0.25)",
    color: "#93c5fd",
  },
  Frontend: {
    bg: "rgba(52,211,153,0.1)",
    border: "rgba(52,211,153,0.25)",
    color: "#6ee7b7",
  },
  Engineering: {
    bg: "rgba(251,146,60,0.1)",
    border: "rgba(251,146,60,0.25)",
    color: "#fdba74",
  },
};
const defaultTag = {
  bg: "rgba(167,139,250,0.08)",
  border: "rgba(167,139,250,0.2)",
  color: "var(--accent-lavender)",
};

// Very lightweight markdown-to-JSX renderer
// Handles: ## headings, ### headings, **bold**, `inline code`, ```code blocks```, paragraphs
function renderMarkdown(content) {
  const lines = content.trim().split("\n");
  const elements = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.trimStart().startsWith("```")) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre
          key={key++}
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "10px",
            padding: "1.25rem 1.5rem",
            overflowX: "auto",
            margin: "1.75rem 0",
          }}
        >
          <code
            style={{
              fontSize: "0.85rem",
              color: "#334155",
              fontFamily: "'Fira Code', 'Cascadia Code', monospace",
              lineHeight: 1.7,
            }}
          >
            {codeLines.join("\n")}
          </code>
        </pre>,
      );
      i++; // skip closing ```
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
            fontWeight: 700,
            color: "#111827",
            margin: "2.5rem 0 1rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          {line.replace("## ", "")}
        </h2>,
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          style={{
            fontSize: "1.05rem",
            fontWeight: 800,
            color: "#1f2937",
            margin: "2rem 0 0.75rem",
            letterSpacing: "-0.01em",
            borderLeft: "4px solid #cbd5e1",
            paddingLeft: "0.85rem",
            lineHeight: 1.35,
          }}
        >
          {line.replace("### ", "")}
        </h3>,
      );
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph (with inline bold and code)
    const formatted = formatInline(line, key++);
    elements.push(
      <p
        key={key++}
        style={{
          fontSize: "1rem",
          color: "#475569",
          lineHeight: 1.85,
          margin: "0 0 1.1rem",
        }}
      >
        {formatted}
      </p>,
    );
    i++;
  }

  return elements;
}

function formatInline(text, baseKey) {
  // Split on **bold** and `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "#111827", fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          style={{
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: "4px",
            padding: "0.1em 0.4em",
            fontSize: "0.88em",
            color: "var(--accent-lavender)",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function getReadTime(content = "") {
  const words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_`>-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const tag = TAG_COLORS[post.tag] || defaultTag;
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || null;
  const postImage = post.thumbnail || post.image || fallbackPostImage;
  const imageFit = post.imageFit || "cover";
  const imagePosition = post.imagePosition || "center";
  const readTime = getReadTime(post.content);

  return (
    <div
      className="blog-article font-monsterat"
      style={{ minHeight: "100vh", background: "#f7f8fa", color: "#151922" }}
    >
      {/* Nav bar */}
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "2rem 1.25rem 0",
        }}
      >
        <Link
          to="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "#64748b",
            textDecoration: "none",
            transition: "color 0.2s",
            fontWeight: 500,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent-lavender)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All posts
        </Link>
      </div>

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: "72rem",
          margin: "2.5rem auto 6rem",
          padding: "0 1.25rem",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            border: "1px solid #cfd6df",
            borderRadius: "18px",
            background: "#ffffff",
          }}
        >
          {/* Post header */}
          <header
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              padding: "4.5rem 1.5rem 3rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "999px",
                  background: tag.bg,
                  border: `1px solid ${tag.border}`,
                  color: tag.color,
                }}
              >
                {post.tag}
              </span>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "#64748b",
                  fontWeight: 500,
                }}
              >
                {post.date}
              </span>
              <span className="blog-index-card__separator" aria-hidden="true">
                ·
              </span>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "#64748b",
                  fontWeight: 500,
                }}
              >
                {readTime}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.4vw, 2.7rem)",
                fontWeight: 900,
                color: "#111827",
                margin: "0 0 1.25rem",
                lineHeight: 1.12,
                letterSpacing: "-0.045em",
              }}
            >
              {post.title}
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#475569",
                lineHeight: 1.7,
                margin: "0 auto",
                maxWidth: "44rem",
              }}
            >
              {post.excerpt}
            </p>
          </header>

          {/* Article image */}
          <img
            src={postImage}
            alt=""
            loading="eager"
            decoding="async"
            style={{
              width: "100%",
              height: "clamp(280px, 46vw, 620px)",
              objectFit: imageFit,
              objectPosition: imagePosition,
              background: "#fbfaf7",
              display: "block",
            }}
          />

          {/* Divider */}
          <div
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              padding: "0 1.25rem",
            }}
          >
            <div
              style={{
                height: "1px",
                background: "#e2e8f0",
                margin: "3rem 0",
              }}
            />
          </div>

          {/* Post body */}
          <article
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              padding: "0 1.25rem 6rem",
              fontWeight: 500,
            }}
          >
            {renderMarkdown(post.content)}

            {/* Next post */}
            {nextPost && (
              <div
                style={{
                  marginTop: "5rem",
                  paddingTop: "3rem",
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#64748b",
                    marginBottom: "1rem",
                  }}
                >
                  Next post
                </p>
                <Link
                  to={`/blog/${nextPost.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      padding: "1.5rem",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      transition: "all 0.25s ease",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(139,92,246,0.3)";
                      e.currentTarget.style.background =
                        "rgba(139,92,246,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#111827",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {nextPost.title}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-lavender)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            )}

            {/* Back to blog */}
            <div style={{ marginTop: "3rem", textAlign: "center" }}>
              <Link
                to="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#64748b",
                  textDecoration: "none",
                  border: "1px solid #cbd5e1",
                  padding: "0.65rem 1.4rem",
                  borderRadius: "999px",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#111827";
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
                  e.currentTarget.style.background = "rgba(139,92,246,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#64748b";
                  e.currentTarget.style.borderColor = "#cbd5e1";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                ← Back to all posts
              </Link>
            </div>
          </article>
        </div>
      </motion.main>
    </div>
  );
}
