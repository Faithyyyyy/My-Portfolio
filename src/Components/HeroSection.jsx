import { motion } from "framer-motion";
import "../fonts/Recoleta-Bold.woff2";
import VerticalNav from "./VerticalNav";
function Hero({ navIcon }) {
  console.log(navIcon);
  const text1 = `Hi there 👋🏽, I'm Faith a Frontend web Developer & Technical Writer`;
  const words = text1.split(" ");
  console.log(words);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  });
  const mailtoHref =
    "mailto:faithfortune6@gmail.com?subject=SendMail&body=Description";
  return (
    <>
      <main
        className={`px-5 py-32 md:pt-32 max-w-6xl mx-auto xl:px-0  ${
          // className={`px-5 py-32 md:pt-56  xl:pt-72 max-w-6xl mx-auto xl:px-0  ${
          navIcon ? "overflow-hidden " : ""
        } ${navIcon ? "h-[800px]" : ""}`}
        id="hero"
      >
        <div className="blob blob-right" />
        <div className="blob blob-left" />
        <VerticalNav />
        <motion.div {...fadeUp(0.1)}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.25)",
              fontSize: "0.78rem",
              fontWeight: 500,
              // fontFamily: "DM Sans, sans-serif",
              color: "var(--accent-lavender)",
              letterSpacing: "0.02em",
            }}
          >
            {/* Pulsing dot */}
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
            Available for high-impact roles
          </span>
        </motion.div>
        {/* Big name */}
        <motion.div
          {...fadeUp(0.2)}
          style={{ marginBottom: "1.25rem", marginTop: "0.25rem" }}
        >
          <h1
            style={{
              // fontFamily: "DM Sans, sans-serif",
              marginTop: "1.25rem",
              fontSize: "clamp(4.5rem, 13vw, 9rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Faith
            <span style={{ color: "var(--accent-purple)" }}>.</span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          {...fadeUp(0.3)}
          style={{
            // fontFamily: "DM Sans, sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: "0 0 1.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          Frontend Systems Architect
        </motion.h2>

        {/* Description with highlighted keywords */}
        <motion.p
          {...fadeUp(0.35)}
          style={{
            // fontFamily: "DM Sans, sans-serif",
            fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            margin: "0 0 2.75rem",
            maxWidth: "520px",
          }}
        >
          Specializing in high-performance digital experiences, secure{" "}
          <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
            payment ecosystems
          </strong>
          , and scalable{" "}
          <strong style={{ color: "var(--accent-lavender)", fontWeight: 600 }}>
            AI Agents
          </strong>{" "}
          &amp;{" "}
          <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
            SaaS operations
          </strong>
          .
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2"
        >
          {/* {words.map((word, index) => {
            return (
              <motion.h1
                variants={child}
                className="font-[Recoleta] font-[900] text-3xl md:text-4xl lg:text-6xl  text-white 
                lg:mr-4"
                key={index}
              >
                {word}
              </motion.h1>
            );
          })} */}
        </motion.div>

        {/* <button className="font-[Recoleta] text-lg mt-10 lg:text-xl font-semibold bg-gradient-to-r from-red-900 to-blue-900 px-8 text-white md:px-12 rounded-full py-4 cta"> */}
        <button className=" text-lg lg:text-xl font-semibold rounded-full py-4 ">
          {/* <button className="font-[Recoleta] text-lg mt-10 lg:text-xl font-semibold rounded-full py-4 "> */}
          <a
            href={mailtoHref}
            style={{
              padding: "0.85rem 2.25rem",
              borderRadius: "9px",
              background:
                "linear-gradient(135deg, var(--accent-purple), var(--accent-periwinkle))",
              color: "#fff",
              fontWeight: 500,
              fontSize: "0.95rem",
              boxShadow: "0 8px 30px rgba(139, 92, 246, 0.3)",
              transition: "all 0.25s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(139, 92, 246, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(139, 92, 246, 0.3)";
            }}
          >
            Contact Me
          </a>
        </button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "40px",
              background:
                "linear-gradient(to bottom, var(--accent-lavender), transparent)",
            }}
          />
        </motion.div>
      </main>

      <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-500"></div>
    </>
  );
}

export default Hero;

<style>{`
  .blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  .blob-right {
    top: 10%;
    right: -5%;
    width: min(500px, 80vw);
    height: min(500px, 80vw);
    background: radial-gradient(circle, rgba(196,181,253,0.35) 0%, transparent 70%);
    filter: blur(40px);
  }
  .blob-left {
    bottom: 5%;
    left: -10%;
    width: min(600px, 90vw);
    height: min(600px, 90vw);
    background: radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 70%);
    filter: blur(50px);
  }
  @media (max-width: 768px) {
    .blob-right { right: -20%; top: 5%; opacity: 0.6; }
    .blob-left  { left: -20%; bottom: 2%; opacity: 0.6; }
  }
`}</style>;
