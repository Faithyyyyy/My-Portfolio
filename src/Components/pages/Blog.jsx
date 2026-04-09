// src/Components/pages/Blog.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogData";
import BlogCover from "../BlogCover";

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

export default function Blog() {
  return (
    <div
      className="font-monsterat text-white bg-black"
      style={{ minHeight: "100vh" }}
    >
      {/* Top bar */}
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "2rem 1.25rem 0",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.4)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent-lavender)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
          }
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
          Back to portfolio
        </Link>
      </div>

      {/* Header */}
      <header
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "5rem 1.25rem 4rem",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent-lavender)",
            marginBottom: "0.75rem",
          }}
        >
          All posts
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 1.25rem",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          Writing
          <span style={{ color: "var(--accent-purple)" }}>.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.4)",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          Thoughts on frontend engineering, AI, technical writing, and building
          things that work well under pressure.
        </motion.p>
      </header>

      <div
        style={{
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(100,100,120,0.4), transparent)",
          marginBottom: "4rem",
        }}
      />

      {/* Post list */}
      <main
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.25rem 8rem",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {blogPosts.map((post, i) => {
          const tag = TAG_COLORS[post.tag] || defaultTag;
          return (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    padding: "2rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "grid",
                    gridTemplateColumns: "140px 1fr auto",
                    gap: "1.75rem",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(".post-title").style.color =
                      "var(--accent-lavender)";
                    e.currentTarget.querySelector(".arrow").style.opacity = "1";
                    e.currentTarget.querySelector(".arrow").style.transform =
                      "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(".post-title").style.color =
                      "#ffffff";
                    e.currentTarget.querySelector(".arrow").style.opacity =
                      "0.3";
                    e.currentTarget.querySelector(".arrow").style.transform =
                      "translateX(0)";
                  }}
                >
                  {/* Thumbnail */}
                  <BlogCover
                    post={post}
                    style={{
                      aspectRatio: "2/3",
                      borderRadius: "8px",
                      flexShrink: 0,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "0.2rem 0.65rem",
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
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.3)",
                        }}
                      >
                        {post.date}
                      </span>
                    </div>
                    <h2
                      className="post-title"
                      style={{
                        fontSize: "clamp(1rem, 2vw, 1.25rem)",
                        fontWeight: 600,
                        color: "#ffffff",
                        margin: 0,
                        letterSpacing: "-0.01em",
                        transition: "color 0.2s ease",
                        lineHeight: 1.3,
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.87rem",
                        color: "rgba(255,255,255,0.38)",
                        margin: 0,
                        lineHeight: 1.65,
                        maxWidth: "540px",
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  <svg
                    className="arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-lavender)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      opacity: 0.3,
                      transition: "all 0.25s ease",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </main>
    </div>
  );
}
