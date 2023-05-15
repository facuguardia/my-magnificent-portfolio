import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
import MenuMobile from "../components/MenuMobile";
// icons
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Home() {
  return (
    <>
      <div>
        <MenuMobile />
      </div>
      <div
      className="bg-[url('images/fondo-bg.png')] bg-cover bg-center w-auto h-full flex flex-col justify-center md:justify-between overflow-y-hidden p-3">
        {/* Navbar */}
        <Navbar />
        <div className="w-auto h-full flex justify-center items-center text-center">
          <div>
            <div>
              <h2 className="flex flex-row items-end gap-6 text-4xl lg:text-4xl font-pop text-gray-300 uppercase shadow-lg">
                Facundo
                <span className="w-auto lg:w-96 h-1 bg-[#09e507] rounded-full"></span>
              </h2>
            </div>
            <div>
              <h1 className="text-6xl lg:text-9xl font-pop font-bold text-gray-100 uppercase">
                Guardia
              </h1>
            </div>
            <div className="flex justify-center lg:justify-end">
              <p className="text-2xl lg:text-3xl text-[#09e507] font-pop">
                Frontend Developer
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-row justify-center lg:justify-end items-center gap-2 lg:gap-4 pt-5">
              <Link
                to="mailto:facuguar12@gmail.com?subject=Contacto%20desde%20webside..."
                target="_blank"
                className="border py-2 px-6 rounded-full hover:border-[#09e507] hover:text-[#09e507] transform hover:scale-110 transition-all duration-300"
              >
                <strong>Contacto</strong>
              </Link>
              <Link
                to="/projects"
                className="border py-2 px-6 rounded-full hover:border-[#09e507] hover:text-[#09e507] transform hover:scale-110 transition-all duration-300"
              >
                <strong>Proyectos</strong>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 text-2xl pb-2">
          <Link to="https://github.com/facuguardia" target="_blank">
            <BsGithub className="hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
          </Link>
          <Link to="https://www.linkedin.com/in/facu-guardia/" target="_blank">
            <BsLinkedin className="hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
          </Link>
          <Link to="https://bit.ly/3yxOSR4" target="_blank">
            <BsWhatsapp className="text-md text-center hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;


// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import MenuMobile from "../components/MenuMobile";
// import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

// function Home() {
//   return (
//     <>
//       <div>
//         <MenuMobile />
//       </div>
//       <div className="bg-hero-pattern bg-cover bg-center w-auto h-full flex flex-col justify-center md:justify-between overflow-y-hidden p-2">
//         <Navbar />
//         <div className="w-auto h-full flex justify-center items-center text-center lg:text-ellipsis">
//           <div className="">
//             <div>
//               <h2 className="flex flex-row items-end gap-6 text-4xl lg:text-4xl font-pop text-gray-300 uppercase shadow-lg">
//                 Facundo
//                 <span className="w-96 h-1 bg-[#09e507] rounded-full"></span>
//               </h2>
//             </div>
//             <div>
//               <h1 className="text-6xl lg:text-9xl font-pop font-bold text-gray-100 uppercase">
//                 Guardia
//               </h1>
//             </div>
//             <div className="flex justify-end">
//               <p className="text-2xl lg:text-3xl text-[#09e507] font-pop">
//                 Frontend Developer
//               </p>
//             </div>
//             <div className="flex flex-col items-center lg:flex-row lg:justify-end pt-5">
//               <Link
//                 to="mailto:facuguar12@gmail.com?subject=Contacto%20desde%20webside..."
//                 target="_blank"
//                 className="border py-2 px-6 rounded-full hover:border-[#09e507] hover:text-[#09e507] transform hover:scale-110 transition-all duration-300"
//               >
//                 <strong>Contacto</strong>
//               </Link>
//               <Link
//                 to="/projects"
//                 className="border py-2 px-6 rounded-full hover:border-[#09e507] hover:text-[#09e507] transform hover:scale-110 transition-all duration-300"
//               >
//                 <strong>Proyectos</strong>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center gap-4 text-2xl pb-2">
//           <Link to="https://github.com/facuguardia" target="_blank">
//             <BsGithub className="hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
//           </Link>
//           <Link to="https://www.linkedin.com/in/facu-guardia/" target="_blank">
//             <BsLinkedin className="hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
//           </Link>
//           <Link to="https://bit.ly/3yxOSR4" target="_blank">
//             <BsWhatsapp className="text-md text-center hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
