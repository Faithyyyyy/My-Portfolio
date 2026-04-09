import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./SocialLinks";
import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const mailtoHref =
    "mailto:faithfortune6@gmail.com?subject=SendMail&body=Description";
  return (
    <div id="aboutus">
      <section className="px-5 py-16 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0">
        <h2
          style={{
            // fontFamily: "DM Sans, sans-serif",
            // fontFamily: "DM Sans, sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "2rem",
          }}
          data-aos="fade"
          className="font-[Recoleta] font-[900] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-3 "
        >
          About Me
        </h2>
        <p
          className="sm:text-lg"
          data-aos="fade"
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {/* <span className="block font-semibold text-xl">
            Hey there! I'm Faith,
          </span>{" "} */}
          I’m a frontend engineer focused on building real-world products that
          people actually use.
          <br />
          <br />
          At BLK Labs, I’ve worked on a range of applications, from internal
          dashboards and admin tools to notification systems and AI-powered
          features, all designed to solve practical business and user problems.
          <br />
          <br />
          My work involves more than just building interfaces. I focus on
          structuring scalable components, integrating APIs, and ensuring that
          the products we ship are responsive, reliable, and intuitive to use.
          <br />
          <br />
          I’ve had to think through how different parts of a system connect, how
          data flows, and how users interact with the product end-to-end.
          <br />
          <br />
          Beyond my work at BLK Labs, I’ve also built independent projects,
          exploring areas like real-time systems and AI-assisted tools. These
          experiences have strengthened my ability to handle asynchronous data,
          manage application state effectively, and design systems that scale.
          <br />
          <br />I enjoy working at the intersection of product and engineering,
          where the goal isn’t just to build features, but to build things that
          actually work well in real environments.
        </p>
        {/* <button className="font-[Recoleta] text-lg mt-10 lg:text-xl font-semibold bg-gradient-to-r from-red-900 to-blue-900 px-8 text-white md:px-12 rounded-full  py-4 cta">
          <a href={mailtoHref}>Contact Me</a>
        </button> */}
        <SocialLinks />
      </section>
      <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-600"></div>
    </div>
  );
}

export default AboutMe;
