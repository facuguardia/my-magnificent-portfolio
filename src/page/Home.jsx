import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
import MenuMobile from "../components/MenuMobile";
// Images
import imgHome from "../assets/home.jpg";
// icons
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Home() {
  return (
    <>
      <div>
        <MenuMobile />
      </div>
      <div className="w-auto h-screen md:min-h-screen flex flex-col justify-between p-4 md:pb-8 lg:pb-4">
        {/* Navbar */}
        <Navbar />
        <div className="flex justify-center items-center md:ml-16 pt-64 md:pt-0">
          <div>
            <h2 className="text-3xl font-medium text-gray- uppercase">
              Facundo
            </h2>
            <h1 className="text-6xl font-bold text-white uppercase">Guardia</h1>
            <p className="text-2xl pl-8 text-[#09e507]">Frontend Developer</p>
            {/* Buttons */}
            <div className="flex justify-center items-center gap-2 pt-3">
              <Link
                to="mailto:facuguar12@gmail.com?subject=Contacto%20desde%20webside..."
                target="_blank"
                className="border py-2 px-6 rounded-full hover:border-[#09e507] hover:text-[#09e507]"
              >
                Contact me
              </Link>
              <Link
                to="/projects"
                className="border py-2 px-6 rounded-full hover:border-[#09e507] hover:text-[#09e507]"
              >
                Projects
              </Link>
            </div>
          </div>
          <div>
            <img
              src={imgHome}
              alt="Imagen de pantalla con codigo css"
              className="hidden sm:block grayscale opacity-60 w-[760px] object-contain"
            />
          </div>
        </div>
        {/* Icons */}
        <footer className="flex flex-col lg:flex-row lg:justify-between items-center gap-3">
          <div className="flex justify-center items-center gap-3 text-2xl">
            <Link to="https://github.com/facuguardia" target="_blank">
              <BsGithub className="hover:text-[#09e507] transform hover:scale-125 transition-all" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/facu-guardia/"
              target="_blank"
            >
              <BsLinkedin className="hover:text-[#09e507] transform hover:scale-125 transition-all" />
            </Link>
            <Link to="https://bit.ly/3yxOSR4" target="_blank">
              <BsWhatsapp className="text-md text-center hover:text-[#09e507] transform hover:scale-125 transition-all" />
            </Link>
          </div>
          {/* Copyrigth */}
          <div>
            <p className="text-gray-400 text-sm">© 2023 Facu Guardia</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
