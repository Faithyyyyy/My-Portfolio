import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const mailtoHref =
    "mailto:faithfortune6@gmail.com?subject=SendMail&body=Description";
  return (
    <div id="aboutus">
      <section className="px-5 py-16 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0">
        <h2
          data-aos="fade"
          className="font-[Recoleta] font-[900] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-3 "
        >
          About Me
        </h2>
        <p className="sm:text-lg" data-aos="fade-right">
          <span className="block font-semibold text-xl">
            Hey there! I'm Faith,
          </span>{" "}
          A frontend developer with a passion for creating beautiful and
          intuitive user experiences. When I'm not crafting pixel-perfect
          designs and whipping up code in my favorite text editor, you can
          usually find me out exploring the great outdoors.
          <br /> <br /> As a developer, I thrive on bringing ideas to life and
          solving complex problems through code. I love diving into new projects
          and pushing the boundaries of what's possible. But I'm not just a
          developer - I'm also a big believer in the power of collaboration and
          teamwork. <br /> <br /> From brainstorming sessions to code reviews, I
          always strive to work closely with my clients and colleagues to ensure
          that we're delivering the best possible solutions. <br /> <br /> So if
          you're looking for a frontend developer who's just as comfortable in
          the great outdoors as they are in the command line, drop me a line and
          let's chat!
        </p>
        <button className="font-[Recoleta] text-lg mt-10 lg:text-xl font-semibold bg-gradient-to-r from-red-900 to-blue-900 px-8 text-white md:px-12 rounded-full  py-4 cta">
          <a href={mailtoHref}>Contact Me</a>
        </button>
      </section>
      <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-600"></div>
    </div>
  );
}

export default AboutMe;
