import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // Container
    <div className="hidden w-full rounded-lg md:flex justify-center md:justify-end items-center p-2">
      <nav className="md:col-span-8 flex items-center gap-4">
        {/* Items 1 */}
        <NavLink
          to="/"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transform hover:scale-125 transition-all"
        >
          Inicio
        </NavLink>
        {/* Items 2 */}
        <NavLink
          to="/about"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transform hover:scale-125 transition-all"
        >
          Acerca
        </NavLink>
        {/* Items 3 */}
        <NavLink
          to="/Resume"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transform hover:scale-125 transition-all"
        >
          Currículum
        </NavLink>
        {/* Items 4 */}
        <NavLink
          to="/projects"
          className="xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transform hover:scale-125 transition-all"
        >
          Proyectos
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
