import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Buttons() {
  return (
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
        className="bg-black hover:bg-[#09e507] border py-2 px-6 rounded-full text-[#09e507] font-medium hover:font-semibold hover:text-black shadow-gray-400 shadow-md transition-all duration-500"
      >
        <Link
          to="mailto:facuguar12@gmail.com?subject=Contacto%20desde%20webside..."
          target="_blank"
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
        className="bg-black hover:bg-[#09e507] border py-2 px-6 rounded-full text-[#09e507] font-medium hover:font-semibold hover:text-black shadow-gray-400 shadow-md transition-all duration-500"
      >
        <Link
          to="/projects"
        >
          Proyectos
        </Link>
      </motion.div>
    </div>
  );
}

export default Buttons;
