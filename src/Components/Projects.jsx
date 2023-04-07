import luxoria from "../assets/LuxoriaImage.png";
import xoxo from "../assets/xoxoImage.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Projects() {
  return (
    <div id="projects">
      <section
        id="projects"
        className="px-5 py-16 xl:p-32 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0"
      >
        <h2 className="font-[Recoleta] font-[900] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-1 ">
          Projects
        </h2>
        <p className="text-gray-400 font-openSans text-xl mb-10">
          Some projects I have worked on..
        </p>
        <div className="grided">
          <Link
            to="https://luxoriapp.netlify.app/"
            target="_blank"
            className="w-full max-w-sm lg:max-w-lg cursor-pointer"
          >
            <img src={luxoria} alt="" className="w-full rounded" />
            <div className="border-gray-700 border  rounded w-full py-12 px-3">
              <div className=" flex justify-between items-center mb-4">
                <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-200 ">
                  Luxoria
                </p>
                <div className="flex gap-2">
                  <button className="font-openSans font-light  text-white ">
                    Live
                  </button>
                  <button className="font-openSans   font-light text-white  ">
                    Code
                  </button>
                </div>
              </div>
              <p>
                A real estate web Application where you get see house you are
                buying
              </p>
            </div>
          </Link>
          <Link className="w-full max-w-sm lg:max-w-lg">
            <img
              src={xoxo}
              alt=""
              className="w-full lg:h-[290px] border-gray-100 border  rounded"
            />
            <div className=" border-gray-700 border rounded w-full py-12 px-3">
              <div className=" flex justify-between items-center mb-4">
                <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-200 ">
                  Xoxo
                </p>
                <div className="flex gap-2">
                  <button className="font-openSans font-light  text-white ">
                    Live
                  </button>
                  <button className="font-openSans   font-light text-white  ">
                    Code
                  </button>
                </div>
              </div>
              <p>
                An E-com web application where you get to shop various items and
                make payments online.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-500"></div>
    </div>
  );
}

export default Projects;
