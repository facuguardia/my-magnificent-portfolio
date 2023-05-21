// Components
import Navbar from "../components/Navbar";
import MenuMobile from "../components/MenuMobile";
// Images
import imgProfile from "/images/img-about.png";
import { motion } from "framer-motion";

function About() {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };
  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div>
        <MenuMobile />
      </div>
      <div className="w-auto h-full flex flex-col justify-center lg:justify-between overflow-hidden p-3">
        <Navbar />
        <div className="lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center lg:gap-10">
          <div className="flex flex-col justify-center gap-3 lg:w-[50%]">
            <motion.h1
              className="text-center lg:text-left text-4xl font-medium text-gray-100 underline underline-offset-8 decoration-green-500 pb-5"
              variants={typingContainer}
              initial="hidden"
              animate="show"
            >
              {Array.from("About me").map((word, i) => (
                <motion.span key={i} variants={typingText}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <div className="text-center lg:text-left">
              <p className="text-xl text-gray-300">
                Soy un desarrollador junior con pasión por el frontend y la
                creación de soluciones digitales impactantes. Estoy al tanto de
                las últimas tendencias y tecnologías, las aplico de manera
                innovadora para ayudar a tus clientes a destacar. Con energía
                positiva, perseverancia y habilidad para trabajar en equipo,
                estoy listo para aportar mi entusiasmo y talento a tu proyecto.{" "}
                <br /> <br /> Juntos, llevaremos tus soluciones digitales al
                siguiente nivel...
              </p>
            </div>
            <div className="flex flex-col lg:items-end mt-10 text-lg text-gray-500">
              <div className="flex flex-col justify-center items-center">
                {" "}
                <motion.h3
                  className="text-gray-100 border-b border-green-500 "
                  variants={typingContainer}
                  initial="hidden"
                  animate="show"
                >
                  {Array.from("Facundo Guardia").map((word, i) => (
                    <motion.span key={i} variants={typingText}>
                      {word}
                    </motion.span>
                  ))}
                </motion.h3>
                <motion.p
                  variants={typingContainer}
                  initial="hidden"
                  animate="show"
                >
                  {Array.from("Mendoza - Argentina").map((word, i) => (
                    <motion.span key={i} variants={typingText}>
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="" style={{ perspective: 2000 }}>
            <img
              src={imgProfile}
              alt="Developer trabajando"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
