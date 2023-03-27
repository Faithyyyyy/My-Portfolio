import github from "../assets/github.svg";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
function Footer() {
  return (
    <footer className="bg-black">
      <div className="px-5 py-16 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0">
        <h2 className="text-white font-[Recoleta] font-[900] text-2xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-1 ">
          Want to discuss ideas and build together?
        </h2>
        <p className="text-gray-500 font-openSans  mb-10">
          I am open to discuss ideas and professional opportunities. Reach out
          to me on my socials or send a direct Email
        </p>
        <button className="font-[Recoleta] text-lg lg:text-xl font-semibold bg-gradient-to-r from-red-900 to-blue-900 px-8 text-white md:px-12 rounded-full after:content-['_↗'] py-4 cta">
          Contact me
        </button>
        <div className="flex gap-5 mt-6">
          <a href="https://github.com/emmanuelobi" className="text-white">
            <img src={github} alt="" className="text-white h-7 w-7 " />
          </a>
          <AiFillLinkedin className="text-white w-7 h-7" />
        </div>
        <div class="flex mt-6 gap-2 items-center">
          <IoIosCall className="text-white h-7 w-7" />
          <span className="text-white">407-437-8084</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
