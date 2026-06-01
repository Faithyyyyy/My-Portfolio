// import logo from "../assets/my-logo.svg";
import React, { useState } from "react";
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
      {/* Mobile Render */}
      <div className={` md:hidden bg-bgBlack transition-all`}>
        <div className="flex justify-between px-5 py-5"></div>
        <div className="flex items-center px-5  gap-5">
          <Links
            to="#projects"
            className="Link overflow-hidden font- text-gray-500 hover:text-[#d87093]"
            smooth
          >
            My Works
          </Links>
          <Links
            to="/blog"
            // to="#aboutus"
            className="Link overflow-hidden font- text-gray-500 hover:text-[#d87093]"
            smooth
          >
            Blog
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
