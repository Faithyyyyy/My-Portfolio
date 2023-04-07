import logo from "../assets/my-logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import { HashLink as Links } from "react-router-hash-link";

function Navbar({ handleNav, navIcon }) {
  const [toggle, setToggle] = useState(false);
  const [closeNavbar, setcloseNavbar] = useState(false);
  // const [navIcon, setNavIcon] = useState(false);

  const closeNav = () => {
    closeNavbar(true);
  };
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  // const handleNav = () => {
  //   setNavIcon(!navIcon);
  // };
  return (
    <>
      <div
        className={`${
          toggle ? "toggleBg" : ""
        } w-full nav h-24 hidden md:block font-poppins fixed px-6 pt-7 z-50`}
      >
        <div className={`   max-w-6xl mx-auto `}>
          <nav className="flex justify-between  items-center">
            <Links to="#hero">
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-5 h-5 " />
                <h2 className="font-manrope font-black text-xl lg:text-2xl">
                  Faith.
                </h2>
              </div>
            </Links>
            <div className="flex items-center justify-center gap-10">
              <Links
                to="#projects"
                className="Link overflow-hidden font- text-gray-500 hover:text-[#d87093]"
                smooth
              >
                My Works
              </Links>
              <Links
                to="#aboutus"
                className="Link overflow-hidden font- text-gray-500 hover:text-[#d87093]"
                smooth
              >
                About Me
              </Links>
              <Links
                to="#tech"
                className=" Link overflow-hidden font- text-gray-500 hover:text-[#d87093]"
                smooth
              >
                Technologies
              </Links>
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile Render */}
      <div className={` md:hidden bg-bgBlack transition-all`}>
        <div className="flex justify-between px-5 py-5">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-5 h-5 " />
              <h2 className="font-manrope font-black text-xl lg:text-2xl">
                Faith.
              </h2>
            </div>
          </Link>

          {/* <div
            className={`w-6  h-7  relative ${navIcon ? "" : "top-2"} z-50 `}
            onClick={() => handleNav()}
          >
            <span
              className={`w-full h-[3px] rounded-md block absolute transition duration-500 ${
                navIcon ? "top-[60%]" : "top-0"
              } ${navIcon ? "-rotate-45" : ""} ${
                navIcon ? "bg-white" : "bg-white"
              }`}
            ></span>
            <span
              className={`  h-[3px] rounded-md block absolute top-[30%] transition duration-500 ${
                navIcon ? "w-0" : "w-[50%]"
              } ${navIcon ? "bg-white" : "bg-white"}`}
            ></span>
            <span
              className={`w-full h-[3px] rounded-md block absolute transition duration-500 ${
                navIcon ? "rotate-45" : ""
              } ${navIcon ? "bg-white" : "bg-white"} top-[60%] `}
            ></span>
          </div> */}
        </div>
        <div className="flex items-center px-5  gap-5">
          <Links
            to="#projects"
            className="Link overflow-hidden font- text-gray-500 hover:text-[#d87093]"
            smooth
          >
            My Works
          </Links>
          <Links
            to="#aboutus"
            className="Link overflow-hidden font- text-gray-500 hover:text-[#d87093]"
            smooth
          >
            About Me
          </Links>
          <Links
            to="#tech"
            className=" Link overflow-hidden font- text-gray-500 hover:text-[#d87093]"
            smooth
          >
            Technologies
          </Links>
        </div>
      </div>
      {/* Mobile Render */}
    </>
  );
}

export default Navbar;
