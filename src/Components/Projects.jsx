// import luxoria from "../assets/LuxoriaImage.png";
// import xoxo from "../assets/xoxoImage.png";
// import artsy from "../assets/vid.png";
// import Trybudget from "../assets/TryBudget.png";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// function Projects() {
//   useEffect(() => {
//     AOS.init({ duration: 500 });
//   }, []);
//   return (
//     <div id="projects">
//       <section
//         id="projects"
//         className="px-5 py-16 xl:p-32 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0"
//       >
//         <h2
//           data-aos="fade"
//           className="font-[Recoleta] font-[900] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-1 "
//         >
//           Projects
//         </h2>
//         <p className="text-gray-400 font-openSans text-xl mb-10">
//           Some projects I have worked on..
//         </p>
//         <div className="grided">
//           <div className="w-full max-w-sm lg:max-w-lg ">
//             <img src={Trybudget} alt="" className="w-full rounded" />
//             <div className="border-gray-700 border  rounded w-full py-12 px-3">
//               <div className=" flex justify-between items-center mb-4">
//                 <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-200 ">
//                   Try Budget
//                 </p>
//                 <div className="flex gap-2">
//                   <a
//                     href="https://github.com/Faithyyyyy/Trybudget"
//                     target="_blank"
//                     className="font-openSans font-light  text-white "
//                   >
//                     Code
//                   </a>
//                   <a
//                     href="https://trybudgetapp.netlify.app/"
//                     target="_blank"
//                     className="font-openSans   font-light text-white  "
//                   >
//                     Live
//                   </a>
//                 </div>
//               </div>
//               <p>
//                 A real time Budgetting Application where you get to keep track
//                 of your money by budgetting and also comparing your budget to
//                 your expenses.
//               </p>
//             </div>
//           </div>
//           <div className="w-full max-w-sm lg:max-w-lg ">
//             <img src={luxoria} alt="" className="w-full rounded" />
//             <div className="border-gray-700 border  rounded w-full py-12 px-3">
//               <div className=" flex justify-between items-center mb-4">
//                 <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-200 ">
//                   Luxoria
//                 </p>
//                 <div className="flex gap-2">
//                   <a
//                     href="https://github.com/Faithyyyyy/Luxoria"
//                     target="_blank"
//                     className="font-openSans font-light  text-white "
//                   >
//                     Code
//                   </a>
//                   <a
//                     href="https://luxoriapp.netlify.app/"
//                     target="_blank"
//                     className="font-openSans   font-light text-white  "
//                   >
//                     Live
//                   </a>
//                 </div>
//               </div>
//               <p>
//                 A real estate web Application where you get see house you are
//                 buying
//               </p>
//             </div>
//           </div>
//           <div className="w-full max-w-sm lg:max-w-lg">
//             <img
//               src={xoxo}
//               alt=""
//               className="w-full lg:h-[290px] border-gray-100 border  rounded"
//             />
//             <div className=" border-gray-700 border rounded w-full py-12 px-3">
//               <div className=" flex justify-between items-center mb-4">
//                 <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-200 ">
//                   Xoxo
//                 </p>
//                 <div className="flex gap-2">
//                   <a
//                     target="_blank"
//                     href="https://github.com/Faithyyyyy/XoXo"
//                     className="font-openSans font-light  text-white "
//                   >
//                     Code
//                   </a>
//                   <a
//                     href="https://xoxoapp.netlify.app/"
//                     className="font-openSans   font-light text-white  "
//                   >
//                     Live
//                   </a>
//                 </div>
//               </div>
//               <p>
//                 An E-com web application where you get to shop various clothing
//                 items and make payments online. Built with ReactJs,
//               </p>
//             </div>
//           </div>
//           {/* <div className="w-full max-w-sm lg:max-w-lg">
//             <img
//               src={artsy}
//               alt=""
//               className="w-full lg:h-[290px] border-gray-100 border  rounded"
//             />
//             <div className=" border-gray-700 border rounded w-full py-12 px-3">
//               <div className=" flex justify-between items-center mb-4">
//                 <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-200 ">
//                   Artsy
//                 </p>
//                 <div className="flex gap-2">
//                   <a
//                     target="_blank"
//                     href="https://github.com/Faithyyyyy/Artsy"
//                     className="font-openSans font-light  text-white "
//                   >
//                     Code
//                   </a>
//                   <a
//                     href="https://artsyapp.netlify.app/"
//                     className="font-openSans   font-light text-white  "
//                   >
//                     Live
//                   </a>
//                 </div>
//               </div>
//               <p>
//                 An E-com web application where you get to shop various artistic
//                 items
//               </p>
//             </div>
//           </div> */}
//           <div className="w-full max-w-sm lg:max-w-lg">
//             <img
//               src={artsy}
//               alt=""
//               className="w-full lg:h-[290px] border-gray-100 border  rounded"
//             />
//             <div className=" border-gray-700 border rounded w-full py-12 px-3">
//               <div className=" flex justify-between items-center mb-4">
//                 <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-200 ">
//                   Minimal Concepts
//                 </p>
//                 <div className="flex gap-2">
//                   {/* <a
//                     target="_blank"
//                     href="https://github.com/Faithyyyyy/Artsy"
//                     className="font-openSans font-light  text-white "
//                   >
//                     Code
//                   </a> */}
//                   <a
//                     href="https://minimalconcepts.ng/"
//                     className="font-openSans   font-light text-white  "
//                   >
//                     Live
//                   </a>
//                 </div>
//               </div>
//               <p>
//                 An interior architecture and design firm that focuses on merging
//                 creativity with innovation to craft sophisticated and functional
//                 designs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-500"></div>
//     </div>
//   );
// }

// export default Projects;

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { projects } from "../lib/projects";

function ProjectCard({ project, index, inView }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        // display: "flex",
        // flexDirection: "column",
        gap: "1rem",
      }}
      // className="max-w-6xl mx-auto"
      // style={{ maxWidth: "1152px", margin: "0 auto" }}
    >
      {/* Clickable image → case study */}
      <div
        onClick={() => navigate(`/projects/${project.slug}`)}
        style={{
          width: "100%",
          height: "420px",
          overflow: "hidden",
          background: "#111",
          position: "relative",
          cursor: "pointer",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.category}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.7s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #13111f 0%, #0d1220 100%)",
              flexDirection: "column",
              gap: "0.4rem",
              transition: "background 0.4s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #1c1830 0%, #111828 100%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #13111f 0%, #0d1220 100%)")
            }
          >
            <span
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1rem",
                color: "var(--accent-lavender)",
                opacity: 0.45,
              }}
            >
              {project.title}
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                color: "var(--text-muted)",
                opacity: 0.35,
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Add image → /public/projects/{project.slug}.png
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,8,20,0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(10,8,20,0.45)";
            e.currentTarget.querySelector("span").style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(10,8,20,0)";
            e.currentTarget.querySelector("span").style.opacity = "0";
          }}
        >
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              opacity: 0,
              transition: "opacity 0.3s ease",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "0.6rem 1.4rem",
              borderRadius: "999px",
            }}
          >
            View Case Study
          </span>
        </div>
      </div>

      {/* Label + description + links */}
      <div style={{ paddingTop: "0.15rem" }}>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "0.35rem",
          }}
        >
          {project.category}
        </p>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 300,
            color: "var(--text-muted)",
            lineHeight: 1.55,
            marginBottom: "0.85rem",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--accent-periwinkle)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-lavender)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--accent-periwinkle)")
            }
          >
            Live ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            GitHub ↗
          </a>
          <button
            onClick={() => navigate(`/projects/${project.slug}`)}
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
              padding: 0,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Case Study →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "6rem 0 7rem", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            // fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "3rem",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Featured Work
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            columnGap: "3rem",
            rowGap: "4.5rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects > div { padding: 0 1.5rem !important; }
          #projects > div > div[style*="grid"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
