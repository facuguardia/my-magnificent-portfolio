import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full rounded-lg p-4 flex justify-center md:justify-end items-center">
      <nav className="md:col-span-8 flex items-center gap-4">
        <NavLink
          to="/"
          href="#"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transition-colors"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          href="#"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transition-colors"
        >
          About
        </NavLink>
        <NavLink
          to="/Resume"
          href="#"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transition-colors"
        >
          Resume
        </NavLink>
        <NavLink
          to="/portfolio"
          href="#"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transition-colors"
        >
          Portfolio
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
