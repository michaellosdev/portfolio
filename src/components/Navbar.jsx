import React from "react";
import ghLogo from "../assets/social_icons/github-logo.png";
import instaLogo from "../assets/social_icons/instagram.png";
import tgLogo from "../assets/social_icons/telegram.png";
import ttLogo from "../assets/social_icons/tik-tok.png";

function Navbar() {
  return (
    <div className="h-28 static w-full flex mb-4 ">
      <div className="w-full  bg-gradient-to-br from-cyan-300 to-blue-400 rounded-xl shadow-md  flex flex-col md:flex-row items-center justify-center pl-4">
        {/* navbar logo container */}
        <div className="w-full lg:w-9/12 md:w-4/6   flex items-center  justify-center lg:justify-start ">
          <p className="text-2xl font-extrabold md:text-4xl">Misha Loskutov</p>
        </div>
        {/* menu links container */}
        <div className="w-full lg:w-2/3 h-1/2 lg:h-full lg:mr-4 flex justify-center items-center md:justify-end lg:pr-4">
          <a
            href="https://github.com/michaellosdev"
            className="h-full flex justify-center items-center"
            alt="github"
          >
            <img src={ghLogo} alt="" className="h-3/4 lg:h-2/6 mx-4" />
          </a>
          <a
            href="https://www.instagram.com/michaellos/"
            className="h-full flex justify-center items-center"
          >
            <img src={instaLogo} alt="" className="h-3/4 lg:h-2/6 mx-4" />
          </a>
          <a
            href=" https://t.me/Michaellos"
            className="h-full flex justify-center items-center"
          >
            <img src={tgLogo} alt="" className="h-3/4 lg:h-2/6 mx-4" />
          </a>
          <a
            href="https://www.tiktok.com/@mishatherussiann "
            className="h-full flex justify-center items-center"
          >
            <img src={ttLogo} alt="" className="h-3/4 lg:h-2/6 mx-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
