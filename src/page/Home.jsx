import { motion } from "framer-motion";
import Buttons from "../components/Buttons";
import SocialMedia from "../components/SocialMedia";

function Home() {
  return (
    <div className="bg-hero bg-cover bg-center w-auto h-screen flex flex-col justify-center md:justify-between">
      <div className="w-auto h-screen flex justify-center items-center text-center">
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
          <Buttons />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Home;
