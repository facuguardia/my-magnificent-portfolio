import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Buttons() {
  const animacionBoton = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  };
  return (
    <div className="flex flex-row justify-center lg:justify-end items-center gap-2 lg:gap-4 pt-5">
      <motion.div
        whileHover={animacionBoton}
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
          className="bg-black border py-2 px-6 rounded-full  text-[#09e507] font-medium transform hover:scale-110 transition-all duration-300 shadow-gray-400 shadow-md"
        >
          Contacto
        </Link>
      </motion.div>
      <motion.div
        whileHover={animacionBoton}
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
          className="bg-black border py-2 px-6 rounded-full text-[#09e507] font-medium transform hover:scale-110 transition-all duration-300 shadow-gray-400 shadow-md "
        >
          Proyectos
        </Link>
      </motion.div>
    </div>
  );
}

export default Buttons;
