import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Icons
import { RiHome3Fill, RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { SlDocs } from "react-icons/sl";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function MenuMobile() {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`lg:hidden bg-black bg-opacity-80 fixed flex justify-center  w-[100%] h-full z-50 transition-all duration-300 ${
        menu ? "top-0" : "-top-full"
      }`}
    >
      <nav className="h-screen flex flex-col justify-center items-center">
        {/* Items 1 */}
        <NavLink
          to="/"
          className="w-[90%] h-auto flex justify-center border-b-[1px] border-gray-500 px-4 py-3 text-white hover:text-green-500"
        >
          <span className="text-sm font-medium flex items-center gap-3">
            {" "}
            <RiHome3Fill /> Home{" "}
          </span>
        </NavLink>

        <NavLink
          to="/about"
          className="w-[90%] h-auto flex justify-center items-center gap-3 border-b-[1px] border-gray-500 px-4 py-3 text-white hover:text-green-500"
        >
          <span className="text-sm font-medium flex items-center gap-3">
            {" "}
            <SiAboutdotme /> About{" "}
          </span>
        </NavLink>

        <NavLink
          to="/resume"
          className="w-[90%] h-auto flex justify-center items-center gap-3 border-b-[1px] border-gray-500 px-4 py-3 text-white hover:text-green-500"
        >
          <span className="text-sm font-medium flex items-center gap-3">
            {" "}
            <SlDocs /> Resume{" "}
          </span>
        </NavLink>

        <NavLink
          to="/projects"
          className="w-[90%] h-auto flex justify-center items-center gap-3 px-4 py-3 text-white hover:text-green-500"
        >
          <span className="text-sm font-medium flex items-center gap-3">
            {" "}
            <AiOutlineFundProjectionScreen /> Projects{" "}
          </span>
        </NavLink>
      </nav>
      {/* Button Mobile */}
      <button
        onClick={() => setMenu(!menu)}
        className="md:hidden fixed right-4 top-4 text-xl bg-black/80 p-2.5 rounded-full text-[#09e507] z-50"
      >
        {menu ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </div>
  );
}

export default MenuMobile;
