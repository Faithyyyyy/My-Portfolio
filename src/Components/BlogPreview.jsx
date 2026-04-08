// src/Components/BlogPreview.jsx
// Drop this into Home in App.jsx between <TechnicalArsenal /> and <AboutMe />

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import BlogCover from "./BlogCover";

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

function BlogCard({ post, index }) {
  const tag = TAG_COLORS[post.tag] || defaultTag;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            padding: "0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(139,92,246,0.06)";
            e.currentTarget.style.border = "1px solid rgba(139,92,246,0.2)";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow =
              "0 20px 60px rgba(139,92,246,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Cover thumbnail */}
          <BlogCover
            post={post}
            style={{
              borderRadius: "16px 16px 0 0",
              border: "none",
              aspectRatio: "16/8",
            }}
          />

          {/* Card body */}
          <div
            style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              flexGrow: 1,
            }}
          >
            {/* Tag + Date */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
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
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.02em",
                }}
              >
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              {post.title}
            </h3>

            {/* Excerpt */}
            <p
              style={{
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                margin: 0,
                flexGrow: 1,
              }}
            >
              {post.excerpt}
            </p>

            {/* Read more */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--accent-lavender)",
                fontSize: "0.82rem",
                fontWeight: 500,
                marginTop: "0.5rem",
              }}
            >
              Read post
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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* end card body */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section style={{ padding: "7rem 0 5rem" }} id="blog">
      <div
        style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-lavender)",
                marginBottom: "0.75rem",
              }}
            >
              From the blog
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Thoughts & Writing
              <span style={{ color: "var(--accent-purple)" }}>.</span>
            </h2>
          </div>

          <Link
            to="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "0.6rem 1.25rem",
              borderRadius: "999px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
              e.currentTarget.style.background = "rgba(139,92,246,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            All posts
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {featured.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>

      <div
        className="w-full h-[1px] bg-gradient-to-r from-black to-slate-500"
        style={{ marginTop: "5rem" }}
      />
    </section>
  );
}
