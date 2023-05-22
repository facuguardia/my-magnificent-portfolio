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
} from "react-icons/si";
import { FaRunning, FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiBeerMugFull } from "react-icons/ci";
import { TbBrandReactNative } from "react-icons/tb";

// Framer Motion
import { motion } from "framer-motion";

function Resume() {
  return (
      <div className="w-auto h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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
            className="col-span-1 pt-2"
          >
            {/* Software Skills */}
            <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
              Software Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-5 text-lg">
              <span className="flex items-center gap-2">
                <SiHtml5 />
                HTML
              </span>
              <span className="flex items-center gap-2">
                <SiCss3 />
                CSS
              </span>
              <span className="flex items-center gap-2">
                <SiJavascript />
                JavaScript
              </span>
              <span className="flex items-center gap-2">
                <SiReact />
                ReactJS
              </span>
              <span className="flex items-center gap-2">
                <SiNextdotjs />
                NextJS
              </span>
              <span className="flex items-center gap-2">
                <TbBrandReactNative />
                React Native
              </span>
              <span className="flex items-center gap-2">
                <SiTailwindcss />
                Tailwind
              </span>
              <span className="flex items-center gap-2">
                <SiFramer />
                Motion
              </span>
              <span className="flex items-center gap-2">
                <SiChakraui />
                Chakra UI
              </span>
              <span className="flex items-center gap-2">
                <SiMaterialui />
                Material UI
              </span>
              <span className="flex items-center gap-2">
                <SiBootstrap />
                Bootstrap
              </span>
              <span className="flex items-center gap-2">
                <SiGithub />
                GitHub
              </span>
              <span className="flex items-center gap-2">
                <SiExpo />
                Expo
              </span>
              <span className="flex items-center gap-2">
                <SiFigma />
                Figma
              </span>
              <span className="flex items-center gap-2">
                <SiTrello />
                Trello
              </span>
              <span className="flex items-center gap-2">
                <SiNotion />
                Notion
              </span>
            </div>
            {/* Languages */}
            <div className="pt-5">
              <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
                Idiomas
              </h2>
              <div className="grid grid-cols-1 pt-5">
                <span className="flex items-center gap-2">Inglés (B1)</span>
                <span className="flex items-center gap-2">
                  Español (Nativo)
                </span>
              </div>
            </div>
            {/* Personal Skills */}
            <div className="pt-5">
              <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
                Personal Skills
              </h2>
              <div className="grid grid-cols-1 pt-5 text-left">
                <p className="flex items-center gap-2">
                  Comunicación efectiva - Trabajo en equipo - Adaptabilidad -
                  Solución de problemas - Habilidad para aprender - Atención al
                  detalle - Creatividad
                </p>
              </div>
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
            className="col-span-1 md:pt-2 md:pl-5 lg:pl-0"
          >
            {/* Experience */}
            <h2 className="text-xl lg:pl-24 font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
              Experiencia
            </h2>
            <div className="pt-5 lg:pl-24">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Abril 2023
                  </time>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    Challenge Personal Pay <br /> (Weather App)
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Marzo 2023
                  </time>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    - Pokedex (React Native) <br />
                    - Memolloween (React Native) <br />- Tablero Kanban
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Febrero 2023
                  </time>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    Challenge Kairox <br /> (Star Wars App)
                  </h3>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Enero 2023
                  </time>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    App Fast Delivery
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
            className="col-span-1 lg:pl-5 lg:pt-2"
          >
            {/* Education */}
            <div>
              <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
                Educación
              </h2>
              <div className="grid grid-cols-1 pt-5">
                <p className="flex items-center gap-2">
                  Mi enfoque autodidacta y mis certificaciones me proporcionaron
                  una base sólida en el desarrollo web, como resultado, me
                  siento preparado para enfrentar cualquier desafío como
                  Frontend Developer.
                </p>
              </div>
            </div>
            {/* What I can do */}
            <div className="pt-5">
              <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
                ¿ Que puedo hacer ?
              </h2>
              <div className="grid grid-cols-1 pt-5 text-left">
                <p className="flex items-center gap-2">
                  Personal website/portfolio - E-commerce website - Aplicación
                  web interactiva - Custom landing page - Plataforma de blogs o
                  publicación de contenido - Herramienta interactiva de
                  visualización de datos - Aplicación web de una sola página
                </p>
              </div>
            </div>
            {/* Hobbies & Interests */}
            <div className="pt-5">
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
                  <CiBeerMugFull className="border rounded-full text-6xl p-2" />
                  Relax
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}

export default Resume;
