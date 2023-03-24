import "./App.css";
import "./fonts/Recoleta-Bold.woff2";

import Navbar from "./Components/Navbar";
import Hero from "./Components/HeroSection";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="font-monsterat h-[1000px]">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
