import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="hidden w-full rounded-lg md:flex justify-center md:justify-end items-center p-4">
      <nav className="md:col-span-8 flex items-center gap-4">
        <NavLink
          to="/"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transition-colors"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transition-colors"
        >
          About
        </NavLink>
        <NavLink
          to="/Resume"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transition-colors"
        >
          Resume
        </NavLink>
        <NavLink
          to="/projects"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transition-colors"
        >
          Projects
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
