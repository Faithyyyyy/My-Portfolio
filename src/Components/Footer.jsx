// import { Link } from "react-router-dom";
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";
// import { IoIosCall } from "react-icons/io";
// function Footer() {
//   return (
//     <footer className="bg-black">
//       <div className="px-5 py-16 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0">
//         <h2 className="text-white font-[Recoleta] font-[900] text-2xl md:text-4xl eading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-1 ">
//           Want to discuss ideas and build together?
//         </h2>
//         <p className="text-gray-500 font-openSans  mb-10">
//           I am open to discuss ideas and professional opportunities. Reach out
//           to me on my socials or send a direct Email
//         </p>
//         <button className="font-[Recoleta] text-lg lg:text-xl font-semibold bg-gradient-to-r from-red-900 to-blue-900 px-8 text-white md:px-12 rounded-full  py-4 cta">
//           Contact me
//         </button>
//         <div className="flex gap-5 mt-6">
//           <Link to="https://github.com/Faithyyyyy" target="_blank">
//             <AiFillGithub className="text-white cursor-pointer text-2xl md:text-3xl footer-links" />
//           </Link>
//           <Link
//             to="https://www.linkedin.com/in/faitholoninayin/"
//             target="_blank"
//           >
//             <AiFillLinkedin className="text-white text-2xl md:text-3xl cursor-pointer footer-links" />
//           </Link>
//           <Link to="https://twitter.com/faitthtoby" target="_blank">
//             <AiFillTwitterCircle className="text-white text-2xl md:text-3xl cursor-pointer footer-links" />
//           </Link>
//         </div>
//         <div class="flex mt-6 gap-2 items-center">
//           <IoIosCall className="text-white h-7 w-7" />
//           <span className="text-white">090 7502 8897</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "1.75rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        background: "var(--bg)",
      }}
    >
      {/* Left — copyright */}
      <p
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "0.82rem",
          color: "rgba(255,255,255,0.3)",
          fontWeight: 300,
          margin: 0,
        }}
      >
        © {year} Faith.
      </p>

      {/* Right — tagline + stack */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Pulsing dot + tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent-purple)",
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent-purple)",
                animation: "ping 1.5s ease-out infinite",
                opacity: 0.6,
              }}
            />
          </span>
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Building for the future
          </span>
        </div>

        {/* Divider */}
        <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "0.8rem" }}>
          |
        </span>

        {/* Stack */}
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.05em",
            margin: 0,
          }}
          className="uppercase"
        >
          Frontend Systems Architect{" "}
          <span style={{ color: "rgba(255,255,255,0.1)" }}>•</span>{" "}
          <span style={{ color: "rgba(255,255,255,0.1)" }}>•</span>{" "}
        </p>
      </div>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @media (max-width: 640px) {
          footer {
            flex-direction: column;
            align-items: flex-start !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
