// Components
import Navbar from "../components/Navbar";
// Icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiTailwindcss,
  SiGithub,
  SiScrumalliance,
} from "react-icons/si";
import { FaRunning, FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiBeerMugFull } from "react-icons/ci";

function Resume() {
  return (
    <div className="w-auto h-screen pl-5 pr-3 overflow-y-hidden">
      <Navbar />
      <div className="grid grid-cols-3 gap-5">
        {/* Columna 1 */}
        <div className="col-span-1 pt-2">
          {/* Software Skills */}
          <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
            Software Skills
          </h2>
          <div className="grid grid-cols-2 pt-5 text-xl">
            <span className="flex items-center gap-2">
              <SiHtml5 />
              HTML5
            </span>
            <span className="flex items-center gap-2">
              <SiCss3 />
              CSS3
            </span>
            <span className="flex items-center gap-2">
              <SiJavascript />
              JavaScript
            </span>
            <span className="flex items-center gap-2">
              <SiTypescript />
              TypeScript
            </span>
            <span className="flex items-center gap-2">
              <SiReact />
              React Js
            </span>
            <span className="flex items-center gap-2">
              <SiNextdotjs />
              Next Js
            </span>
            <span className="flex items-center gap-2">
              <SiTailwindcss />
              Tailwind CSS
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
              Bootstrap CSS
            </span>
            <span className="flex items-center gap-2">
              <SiGithub />
              Git and Github
            </span>
            <span className="flex items-center gap-2">
              <SiScrumalliance />
              Scrum
            </span>
          </div>
          {/* Languages */}
          <div className="pt-5">
            <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
              Languages
            </h2>
            <div className="grid grid-cols-1 pt-5">
              <span className="flex items-center gap-2">Inglés (A2)</span>
              <span className="flex items-center gap-2">Español (Nativo)</span>
            </div>
          </div>
          {/* Personal Skills */}
          <div className="pt-5">
            <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
              Personal Skills
            </h2>
            <div className="grid grid-cols-1 pt-5 text-center">
              <p className="flex items-center gap-2">
                Comunicación efectiva - Trabajo en equipo - Adaptabilidad -
                Solución de problemas - Habilidad para aprender - Atención al
                detalle - Creatividad - Gestión del tiempo - Pensamiento crítico
              </p>
            </div>
          </div>
        </div>
        {/* Columna 2 */}
        <div className="col-span-1 pt-2">
          {/* Experience */}
          <h2 className="text-xl pl-24 font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
            Experience
          </h2>
          <div className="pt-5 pl-24">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Enero 2023 - Presente
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  App Fast Delivery
                </h3>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Diciembre 2022
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Octocat Search
                </h3>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Noviembre 2022
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Shop Market
                </h3>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Octubre 2022
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Clone Spotify
                </h3>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Septiembre 2022
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Dashboard UI
                </h3>
              </li>
            </ol>
          </div>
        </div>
        {/* Columna 3 */}
        <div className="col-span-1 pl-5 pt-2">
          {/* Educacion */}
          <div>
            <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
              Education
            </h2>
            <div className="grid grid-cols-1 pt-5">
              <p className="flex items-center gap-2">
                Mi enfoque autodidacta y mis certificaciones de Platzi me
                proporcionaron una base sólida en el desarrollo web, como
                resultado, me siento preparado para enfrentar cualquier desafío
                como Frontend Developer.
              </p>
            </div>
          </div>
          {/* what can i do ? */}
          <div className="pt-5">
            <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
              what can i do ?
            </h2>
            <div className="grid grid-cols-1 pt-5 text-center">
              <p className="flex items-center gap-2">
                Personal website/portfolio - E-commerce website - Interactive
                web application - Custom landing page - Blogging or content
                publishing platform - Effective marketing landing page -
                Interactive data visualization tool
              </p>
            </div>
          </div>
          {/* Hobbies & Interests */}
          <div className="pt-5">
            <h2 className="text-xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
              Hobbies & Interests
            </h2>
            <div className="pt-5 flex justify-center items-center gap-4">
              <div className="flex flex-col items-center">
                <FaRunning className="border rounded-full text-6xl p-2" />
                Correr
              </div>

              <div className="flex flex-col items-center">
                <FaPlaneDeparture className="border rounded-full text-6xl p-2" />
                Viajar
              </div>

              <div className="flex flex-col items-center">
                <AiOutlineFundProjectionScreen className="border rounded-full text-6xl p-2" />
                Proyectos
              </div>

              <div className="flex flex-col items-center">
                <CiBeerMugFull className="border rounded-full text-6xl p-2" />
                Relax
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
