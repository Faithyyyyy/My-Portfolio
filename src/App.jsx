// import "./App.css";
// import "./fonts/Recoleta-Bold.woff2";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/HeroSection";
// import Projects from "./Components/Projects";
// import AboutMe from "./Components/AboutMe";
// import Tech from "./Components/Tecnologies";
// import Footer from "./Components/Footer";
// import { useState } from "react";
// function App() {
//   const [navIcon, setNavIcon] = useState(false);
//   const handleNav = () => {
//     setNavIcon(!navIcon);
//   };
//   return (
//     <div
//       className={`font-monsterat text-white bg-black ${
//         navIcon ? "overflow-hidden h-[300px]" : ""
//       }`}
//     >
//       <Navbar handleNav={handleNav} navIcon={navIcon} />
//       <Hero navIcon={navIcon} />
//       <Projects />
//       <AboutMe />
//       <Tech />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import "./fonts/Recoleta-Bold.woff2";
import Navbar from "./Components/Navbar";
import Hero from "./Components/HeroSection";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Tech from "./Components/Tecnologies";
import Footer from "./Components/Footer";
import BlogPreview from "./Components/BlogPreview";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TechnicalArsenal from "./Components/TechnicalArsenal";
import ThemeToggle from "./Components/ThemeToggle";

const CaseStudy = lazy(() => import("./Components/pages/CaseStudy"));
const Blog = lazy(() => import("./Components/pages/Blog.tsx"));
const BlogPost = lazy(() => import("./Components/pages/BlogPost"));

function Home({ navIcon, handleNav, theme }) {
  return (
    <div
      className={`portfolio-page font-monsterat text-white bg-black overflow-x-hidden ${
        navIcon ? "overflow-hidden h-[300px]" : ""
      }`}
    >
      <Navbar handleNav={handleNav} navIcon={navIcon} theme={theme} />
      <Hero navIcon={navIcon} />
      <Projects />
      <BlogPreview />
      <TechnicalArsenal />
      <AboutMe />
      {/* <Tech /> */}
      <Footer />
    </div>
  );
}

function App() {
  const [navIcon, setNavIcon] = useState(false);
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith("/blog");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const handleNav = () => {
    setNavIcon(!navIcon);
  };

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = isBlogRoute ? "light" : theme;
    document.body.classList.toggle("blog-body", isBlogRoute);

    if (!isBlogRoute) {
      localStorage.setItem("portfolio-theme", theme);
    }

    return () => {
      document.body.classList.remove("blog-body");
    };
  }, [theme, isBlogRoute]);

  return (
    <div className={`theme-shell ${isBlogRoute ? "blog-shell" : `theme-${theme}`}`}>
      {!isBlogRoute && (
        <ThemeToggle theme={theme} onToggle={handleThemeToggle} />
      )}
      <Suspense fallback={<div className="route-loading">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Home navIcon={navIcon} handleNav={handleNav} theme={theme} />
            }
          />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
