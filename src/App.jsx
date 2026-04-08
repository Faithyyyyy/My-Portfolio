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
import CaseStudy from "./Components/pages/CaseStudy";
import Blog from "./Components/pages/Blog";
import BlogPost from "./Components/pages/BlogPost";
import BlogPreview from "./Components/BlogPreview";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TechnicalArsenal from "./Components/TechnicalArsenal";

function Home({ navIcon, handleNav }) {
  return (
    <div
      className={`font-monsterat text-white bg-black ${
        navIcon ? "overflow-hidden h-[300px]" : ""
      }`}
    >
      <Navbar handleNav={handleNav} navIcon={navIcon} />
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
  const handleNav = () => {
    setNavIcon(!navIcon);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home navIcon={navIcon} handleNav={handleNav} />}
      />
      <Route path="/projects/:slug" element={<CaseStudy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
