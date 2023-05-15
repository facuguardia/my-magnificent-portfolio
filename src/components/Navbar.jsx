import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // Container
    <div className="hidden w-full rounded-lg lg:flex lg:justify-end items-center p-2">
      <nav className="lg:col-span-8 flex items-center gap-5">
        {/* Items 1 */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#09e507]"
              : "xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transform hover:scale-125 transition-all duration-500"
          }
        >
          Inicio
        </NavLink>
        {/* Items 2 */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#09e507]"
              : "xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transform hover:scale-125 transition-all duration-500"
          }
        >
          Acerca
        </NavLink>
        {/* Items 3 */}
        <NavLink
          to="/Resume"
          className={({ isActive }) =>
            isActive
              ? "text-[#09e507]"
              : "xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transform hover:scale-125 transition-all duration-500"
          }
        >
          Currículum
        </NavLink>
        {/* Items 4 */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-[#09e507]"
              : "xl:py-1 xl:px-2 rounded-lg hover:text-[#09e507] transform hover:scale-125 transition-all duration-500"
          }
        >
          Proyectos
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
