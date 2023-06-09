import react from "../assets/reactt.svg";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { DiSass } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Tech() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="tech">
      <section className="px-5 py-16 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0">
        <h2
          className="font-[Recoleta] font-[900] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-1 "
          data-aos="fade"
        >
          Tech Stack
        </h2>
        <p className="text-gray-500 font-openSans text-xl mb-10">
          I've worked with a range of technologies in the web development
          ecosystem.
        </p>
        <div className="grid gap-6 tech-grid">
          <div className="flex items-center gap-6 md:block">
            <FaReact className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              React
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <AiOutlineHtml5 className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              HTML5
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <DiCss3 className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              CSS3
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <SiTailwindcss className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              TailwindCss
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <SiJavascript className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              Javascript
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <AiFillGithub className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              Github
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <AiFillGithub className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              Git
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <DiSass className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              Sass
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <DiNodejs className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat sm:text-2xl block hover:text-[#d87093]">
              Node
            </span>
          </div>
          <div className="flex gap-6 md:block">
            <SiTypescript className="block text-3xl mb-2 hover:text-[#d87093] lg:text-6xl" />
            <span className="font-bold font-monsterat hover:text-[#d87093] sm:text-2xl block">
              Typescript
            </span>
          </div>
        </div>
      </section>{" "}
      <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-600"></div>{" "}
    </div>
  );
}

export default Tech;
