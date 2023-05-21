import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
import MenuMobile from "../components/MenuMobile";
// icons
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
// Animation
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div>
        <MenuMobile />
      </div>
      <div className="bg-hero bg-cover bg-center w-auto h-full flex flex-col justify-center md:justify-between overflow-y-hidden p-3">
        {/* Navbar */}
        <Navbar />
        <div className="w-auto h-full flex justify-center items-center text-center">
          <div>
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-row items-end gap-6 text-4xl lg:text-4xl font-pop text-gray-300 uppercase shadow-lg"
              >
                Facundo
                <span className="w-auto lg:w-96 h-1 bg-[#09e507] rounded-full"></span>
              </motion.h2>
            </div>
            <div>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-6xl lg:text-9xl font-pop font-bold text-gray-100 uppercase"
              >
                Guardia
              </motion.h1>
            </div>
            <div className="flex justify-center lg:justify-end">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-2xl lg:text-3xl text-[#09e507] font-pop"
              >
                Frontend Developer
              </motion.p>
            </div>
            {/* Buttons */}
            <div className="flex flex-row justify-center lg:justify-end items-center gap-2 lg:gap-4 pt-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Link
                  to="mailto:facuguar12@gmail.com?subject=Contacto%20desde%20webside..."
                  target="_blank"
                  className="bg-black border py-2 px-6 rounded-full hover:border-[#09e507] text-[#09e507] font-medium transform hover:scale-110 transition-all duration-300 shadow-gray-400 shadow-md"
                >
                  Contacto
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Link
                  to="/projects"
                  className="bg-black border py-2 px-6 rounded-full hover:border-[#09e507] text-[#09e507] font-medium transform hover:scale-110 transition-all duration-300 shadow-gray-400 shadow-md "
                >
                  Proyectos
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center gap-4 text-2xl pb-2"
        >
          <Link to="https://github.com/facuguardia" target="_blank">
            <BsGithub className="hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
          </Link>
          <Link to="https://www.linkedin.com/in/facu-guardia/" target="_blank">
            <BsLinkedin className="hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
          </Link>
          <Link to="https://bit.ly/3yxOSR4" target="_blank">
            <BsWhatsapp className="text-md text-center hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
