import "./App.css";
import "./fonts/Recoleta-Bold.woff2";

import Navbar from "./Components/Navbar";
import Hero from "./Components/HeroSection";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Tech from "./Components/Tecnologies";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="font-monsterat h-[1000px] ">
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Tech />
      <Footer />
    </div>
  );
}

export default App;
