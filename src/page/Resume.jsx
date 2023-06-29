import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiTailwindcss,
  SiFramer,
  SiGithub,
  SiExpo,
  SiFigma,
  SiTrello,
  SiNotion,
  SiWoocommerce,
  SiWordpress,
  SiPlatzi,
} from "react-icons/si";
import { FaRunning, FaPlaneDeparture, FaMinus } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";

// Framer Motion
import { motion } from "framer-motion";

function Resume() {
  return (
    <div className="w-auto h-screen p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Column 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="col-span-1 mb-5"
        >
          {/* Software Skills */}
          <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
            Software Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 text-lg pt-5">
            <span className="flex items-center gap-2 pb-2">
              <SiHtml5 />
              HTML
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiCss3 />
              CSS
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiTailwindcss />
              Tailwind
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiFramer />
              Framer Motion
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiChakraui />
              Chakra UI
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiMaterialui />
              Material UI
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiBootstrap />
              Bootstrap
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiJavascript />
              JavaScript
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiReact />
              ReactJS
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiNextdotjs />
              NextJS
            </span>
            <span className="flex items-center gap-2 pb-2">
              <TbBrandReactNative />
              React Native
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiExpo />
              Expo
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiWordpress />
              WordPress
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiWoocommerce />
              WooCommerce
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiFigma />
              Figma
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiGithub />
              GitHub
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiNotion />
              Notion
            </span>
            <span className="flex items-center gap-2 pb-2">
              <SiTrello />
              Trello
            </span>
          </div>
          {/* Idiomas */}
          <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500 pt-5">
            Idiomas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 text-lg pt-5">
            <span className="flex items-center gap-2 pb-2">
              <FaMinus className="text-green-500" />
              Español (Nativo)
            </span>
            <span className="flex items-center gap-2 pb-2">
              <FaMinus className="text-green-500" />
              Inglés (B1)
            </span>
          </div>
        </motion.div>
        {/* Column 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="col-span-1"
        >
          {/* Experience */}
          <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
            Experiencia
          </h2>
          <div className="pt-5">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-5 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Junio 2023
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Developer Frontend en Myfuture-AI
                </h3>
              </li>

              <li className="mb-5 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Mayo 2023
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Proyectos con Flutter
                </h3>
              </li>

              <li className="mb-5 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Abril 2023
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Challenge Personal Pay <br /> (Weather App)
                </h3>
              </li>

              <li className="mb-5 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Marzo 2023
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  - Pokedex (React Native) <br />
                  - Memolloween (React Native) <br />- Tablero Kanban
                </h3>
              </li>

              <li className="mb-5 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Febrero 2023
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Challenge Kairox <br /> (Star Wars App)
                </h3>
              </li>
            </ol>
          </div>
        </motion.div>
        {/* Column 3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="col-span-1"
        >
          {/* Education */}
          <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
            Educación
          </h2>
          <div className="grid grid-cols-1 pt-5 mb-5">
            <p className="flex items-center gap-2">
            Con una base sólida en desarrollo web gracias a mi enfoque autodidacta y certificaciones, me siento preparado para enfrentar cualquier desafío como Frontend Developer. Además, estoy a punto de finalizar mi carrera de APX, lo cual amplía mis conocimientos y habilidades hacia el desarrollo fullstack.</p>
          </div>
          {/* Personal Skills */}
          <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
            Personal Skills
          </h2>
          <div className="grid grid-cols-1 pt-5 mb-5 text-left">
            <p className="flex items-center gap-2">
              Comunicación efectiva - Trabajo en equipo - Adaptabilidad -
              Solución de problemas - Habilidad para aprender - Atención al
              detalle - Creatividad
            </p>
          </div>
          {/* Hobbies & Interests */}
          <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
            Hobbies & pastimes
          </h2>
          <div className="pt-5 flex lg:justify-center items-center gap-4">
            {/* Icon1  */}
            <div className="flex flex-col items-center">
              <FaRunning className="border rounded-full text-6xl p-2" />
              Correr
            </div>
            {/* Icon2 */}
            <div className="flex flex-col items-center">
              <FaPlaneDeparture className="border rounded-full text-6xl p-2" />
              Viajar
            </div>
            {/* Icon3 */}
            <div className="flex flex-col items-center">
              <AiOutlineFundProjectionScreen className="border rounded-full text-6xl p-2" />
              Proyectos
            </div>
            {/* Icon4 */}
            <div className="flex flex-col items-center">
              <SiPlatzi className="border rounded-full text-6xl p-2" />
              Aprender
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
