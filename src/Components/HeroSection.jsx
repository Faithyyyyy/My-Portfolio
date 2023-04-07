import { motion } from "framer-motion";
import "../fonts/Recoleta-Bold.woff2";
function Hero({ navIcon }) {
  console.log(navIcon);
  const text1 = `Hi there 👋🏽, I'm Faith a Frontend web Developer & Technical Writer`;
  const words = text1.split(" ");
  console.log(words);
  const mailtoHref =
    "mailto:faithfortune6@gmail.com?subject=SendMail&body=Description";
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
  return (
    <>
      <main
        className={`px-5 py-32 md:pt-56  xl:pt-72 max-w-6xl mx-auto xl:px-0  ${
          navIcon ? "overflow-hidden " : ""
        } ${navIcon ? "h-[800px]" : ""}`}
        id="hero"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2"
        >
          {words.map((word, index) => {
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
          })}
        </motion.div>

        <button className="font-[Recoleta] text-lg mt-10 lg:text-xl font-semibold bg-gradient-to-r from-red-900 to-blue-900 px-8 text-white md:px-12 rounded-full py-4 cta">
          <a href={mailtoHref}>Contact Me</a>
        </button>
      </main>
      <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-500"></div>
    </>
  );
}

export default Hero;
