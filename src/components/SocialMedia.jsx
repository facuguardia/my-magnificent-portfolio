import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function SocialMedia() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex justify-center lg:justify-end items-center gap-6 text-2xl lg:text-3xl mt-8"
    >
      <Link to="https://github.com/facuguardia" target="_blank">
        <BsGithub className="hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
      </Link>
      <Link to="https://www.linkedin.com/in/facu-guardia/" target="_blank">
        <BsLinkedin className="hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
      </Link>
      <Link to="https://bit.ly/wsp-dev" target="_blank">
        <BsWhatsapp className="text-md text-center hover:text-[#09e507] transform hover:scale-125 transition-all duration-300" />
      </Link>
    </motion.div>
  );
}

export default SocialMedia;
