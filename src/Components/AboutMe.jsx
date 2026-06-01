import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./SocialLinks";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="aboutus">
      <section className="about-section px-5 py-20 md:py-28 max-w-6xl mx-auto xl:px-0">
        <div className="about-grid">
          <div data-aos="fade-up">
            <p className="about-eyebrow">About Me</p>
            {/* <h2 className="about-title">
              Interfaces, product systems, and the workflows behind them.
            </h2> */}
            <div className="about-copy">
              <p>
                As a Frontend Engineer, I&apos;m fascinated by what happens
                beyond the interface.
              </p>
              <p>
                I analyze products, workflows, and systems to understand how
                they solve problems, drive adoption, and create better user
                experiences.
              </p>
              <p>
                Currently, I am exploring how products are designed, understood,
                and adopted. I share what I learn by breaking down the systems
                and workflows behind them.
              </p>
            </div>
            <SocialLinks />
          </div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <div className="about-orbit">
              <motion.span
                className="about-pulse about-pulse-one"
                animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.85, 0.45] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="about-pulse about-pulse-two"
                animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.72, 0.35] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
              <div className="about-node about-node-main">
                <span>Interface</span>
              </div>
              <div className="about-node about-node-top">
                <span>Workflow</span>
              </div>
              <div className="about-node about-node-right">
                <span>Adoption</span>
              </div>
              <div className="about-node about-node-bottom">
                <span>Systems</span>
              </div>
              <div className="about-line about-line-one" />
              <div className="about-line about-line-two" />
              <div className="about-line about-line-three" />
            </div>
          </motion.div>
        </div>
      </section>
      <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-600"></div>
    </div>
  );
}

export default AboutMe;
