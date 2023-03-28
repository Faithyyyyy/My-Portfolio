import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
function Footer() {
  return (
    <footer className="bg-black">
      <div className="px-5 py-16 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0">
        <h2 className="text-white font-[Recoleta] font-[900] text-2xl md:text-4xl eading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-1 ">
          Want to discuss ideas and build together?
        </h2>
        <p className="text-gray-500 font-openSans  mb-10">
          I am open to discuss ideas and professional opportunities. Reach out
          to me on my socials or send a direct Email
        </p>
        <button className="font-[Recoleta] text-lg lg:text-xl font-semibold bg-gradient-to-r from-red-900 to-blue-900 px-8 text-white md:px-12 rounded-full  py-4 cta">
          Contact me
        </button>
        <div className="flex gap-5 mt-6">
          <Link to="https://github.com/Faithyyyyy" target="_blank">
            <AiFillGithub className="text-white w-7 h-7 cursor-pointer" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/faitholoninayin/"
            target="_blank"
          >
            <AiFillLinkedin className="text-white w-7 h-7 cursor-pointer" />
          </Link>
          <Link to="https://twitter.com/faitthtoby" target="_blank">
            <AiFillTwitterCircle className="text-white w-7 h-7 cursor-pointer" />
          </Link>
        </div>
        <div class="flex mt-6 gap-2 items-center">
          <IoIosCall className="text-white h-7 w-7" />
          <span className="text-white">090 7502 8897</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
