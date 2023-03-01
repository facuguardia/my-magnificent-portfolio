import { useState } from "react";
import { NavLink } from "react-router-dom";
// Icons
import { RiHome3Fill, RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { SlDocs } from "react-icons/sl";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Sidebar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        className={`lg:hidden bg-black h-full fixed w-[60%] z-50 transition-all duration-300 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        {/* Nav */}
        <div className="bg-primary-300 pl-4 rounded-tr-[100px] h-[70vh] flex flex-col pt-72">
          <nav className="flex flex-col gap-6">
            <NavLink
              to="/"
              className="flex items-center gap-4 text-[#09e507] py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <RiHome3Fill /> Home
            </NavLink>
            <NavLink
              to="/about"
              className="flex items-center gap-4 text-[#09e507] py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <SiAboutdotme /> About
            </NavLink>
            <NavLink
              to="/Resume"
              className="flex items-center gap-4 text-[#09e507] py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <SlDocs /> Resume
            </NavLink>
            <NavLink
              to="/projects"
              className="flex items-center gap-4 text-[#09e507] py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <AiOutlineFundProjectionScreen /> Projects
            </NavLink>
          </nav>
        </div>
      </div>
      {/* Button Mobile */}
      <button
        onClick={() => setMenu(!menu)}
        className="md:hidden fixed right-4 bottom-4 text-xl bg-black/80 p-2.5 rounded-full text-[#09e507] z-50"
      >
        {menu ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </>
  );
}

export default Sidebar;
