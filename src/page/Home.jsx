import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
// Images
import imgHome from "../assets/home.jpg";
// icons
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-between overflow-y-auto">
      <Navbar />
      <div className="flex justify-between items-center">
        <div className="flex flex-col pl-32">
          <h2 className="text-3xl font-medium text-gray- uppercase">Facundo</h2>
          <h1 className="text-6xl font-bold text-white uppercase">Guardia</h1>
          <p className="text-2xl pl-6 text-gray-500">Frontend Developer</p>
          {/* Buttons */}
          <div className="flex justify-center items-center gap-2 pt-10">
            <Link
              to="https://drive.google.com/file/d/1i7_wyIQYtpuYga0fr57k8JutQwDDUx2y/view?usp=sharing"
              target="_blank"
              className="border py-2 px-6 rounded-full hover:border-[#09e507]"
            >
              Curriculum
            </Link>
            <Link
              to="/portfolio"
              className="border py-2 px-6 rounded-full hover:border-[#09e507]"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div>
          <img src={imgHome} alt="" className="grayscale opacity-60" />
        </div>
      </div>
      {/* Icons */}
      <footer className="flex pl-10 pb-4 gap-5 text-xl">
        <Link to="https://github.com/facuguardia" target="_blank">
          <BsGithub className="hover:text-[#09e507]" />
        </Link>
        <Link to="https://www.linkedin.com/in/facu-guardia/" target="_blank">
          <BsLinkedin className="hover:text-[#09e507]" />
        </Link>
        <Link
          href="https://bit.ly/3yxOSR4"
          target="_blank"
        >
          <BsWhatsapp className="text-md text-center hover:text-[#09e507]" />
        </Link>
      </footer>
    </div>
  );
}

export default Home;
