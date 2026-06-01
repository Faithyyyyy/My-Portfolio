import React, { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import keyboardImage from "../../assets/lazy_loading.webp";
import { blogPosts } from "../../data/blogData";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  tag?: string;
  content?: string;
  thumbnail?: string;
  image?: string;
  imageFit?: string;
  imagePosition?: string;
  slug: string;
};

function getReadTime(content = "") {
  const words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_`>-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function BlogCard({ post }: { post: BlogPost }) {
  const postImage = post.thumbnail || post.image || keyboardImage;
  const objectFit = (post.imageFit || "cover") as CSSProperties["objectFit"];

  return (
    <article className="blog-index-card overflow-hidden rounded-[14px] border transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <Link
        to={`/blog/${post.slug}`}
        className="block text-inherit no-underline"
      >
        <div className="p-5 pb-0">
          <img
            src={postImage}
            alt=""
            className="h-[210px] w-full rounded-[10px] object-cover"
            style={{
              objectFit,
              objectPosition: post.imagePosition || "center",
              background: "#fbfaf7",
            }}
          />
        </div>

        <div className="px-5 pb-5 pt-7 sm:px-7 sm:pb-7">
          <h2 className="blog-index-card__title m-0 text-[1.45rem] font-extrabold leading-[1.32] tracking-[-0.03em] sm:text-[1.6rem]">
            {post.title}
          </h2>

          <p className="blog-index-card__excerpt mb-0 mt-6 text-[1.02rem] leading-8">
            {post.excerpt}
          </p>

          <div className="blog-index-card__meta mt-7 flex font-semibold flex-wrap items-center gap-3 text-[0.95rem] ">
            <span>{post.date}</span>
            <span className="blog-index-card__separator" aria-hidden="true">
              ·
            </span>
            <span>{getReadTime(post.content)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return blogPosts;

    return blogPosts.filter((post) => {
      const searchableText = [
        post.title,
        post.excerpt,
        post.date,
        post.tag,
        post.content,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchTerm]);

  return (
    <main className="blog-index min-h-screen font-monsterat">
      <header className="blog-index-header sticky top-0 z-20 border-b backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 md:px-10">
          <div className="flex items-center gap-5">
            <Link
              to="/"
              aria-label="Back to portfolio"
              // className="grid h-12 w-12 place-items-center rounded-[8px] border border-[#d7dce4] bg-white text-[#727b88] shadow-sm transition hover:text-[#151922]"
            >
              <div className="h-10 w-10 overflow-hidden rounded-[2px] ">
                <img
                  src="/src/assets/my-pic.jpeg"
                  alt=""
                  className="h-full w-full object-contain "
                />
              </div>
            </Link>
          </div>

          <nav className="blog-index-actions flex items-center gap-5">
            <label className="blog-search" aria-label="Search articles">
              <FiSearch size={18} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search articles"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="blog-search__clear"
                  aria-label="Clear search"
                  onClick={() => setSearchTerm("")}
                >
                  <FiX size={16} />
                </button>
              )}
            </label>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 px-5 py-8 sm:py-10 lg:grid-cols-2 lg:gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <div className="blog-search-empty lg:col-span-2">
            No articles found for “{searchTerm}”.
          </div>
        )}
      </section>
    </main>
  );
}
