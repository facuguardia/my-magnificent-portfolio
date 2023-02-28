import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
// Images
import imgHome from "../assets/home.jpg";
// icons
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Home() {
  return (
    <div className="w-auto h-screen md:min-h-screen flex flex-col justify-between p-4">
      <Navbar />
      <div className="flex md:justify-center items-center md:ml-16">
        <div>
          <h2 className="text-3xl font-medium text-gray- uppercase">Facundo</h2>
          <h1 className="text-6xl font-bold text-white uppercase">Guardia</h1>
          <p className="text-2xl pl-8 text-gray-500">Frontend Developer</p>
          {/* Buttons */}
          <div className="flex justify-center items-center gap-2 pt-3">
            <Link
              to="https://drive.google.com/file/d/1fL6d8vwP-_dKfWrdXTdtyg6J0zrZ-3cy/view?usp=sharing"
              target="_blank"
              className="border py-2 px-6 rounded-full hover:border-[#09e507] hover:text-[#09e507]"
            >
              Currículum
            </Link>
            <Link
              to="/portfolio"
              className="border py-2 px-6 rounded-full hover:border-[#09e507] hover:text-[#09e507]"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div>
          <img
            src={imgHome}
            alt=""
            // necesito ajustar el tamaño de la imagen

            className="hidden sm:block grayscale opacity-60 w-[760px] object-contain"
          />
        </div>
      </div>
      {/* Icons */}
      <footer className="flex flex-col lg:flex-row lg:justify-between items-center gap-3">
        <div className="flex gap-3">
          <Link to="https://github.com/facuguardia" target="_blank">
            <BsGithub className="hover:text-[#09e507]" />
          </Link>
          <Link to="https://www.linkedin.com/in/facu-guardia/" target="_blank">
            <BsLinkedin className="hover:text-[#09e507]" />
          </Link>
          <Link to="https://bit.ly/3yxOSR4" target="_blank">
            <BsWhatsapp className="text-md text-center hover:text-[#09e507]" />
          </Link>
        </div>
        {/* Copyrigth */}
        <div>
          <p className="text-gray-400 text-sm">
            © 2023 Facundo Guardia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
