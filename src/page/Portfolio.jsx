import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
// Images
import octocat from "../assets/octocat.png";
import shopMarket from "../assets/shop-market.png";
import spotify from "../assets/spotify.png";
import dashboard from "../assets/dashboard.png";
import portfolio from "../assets/portafolio.png";
import message from "../assets/message.png";
// Icons
import {
  SiHtml5,
  SiCss3,
  SiVite,
  SiReact,
  SiNextdotjs,
  SiMaterialui,
  SiTailwindcss,
  SiSass,
  SiReactrouter,
} from "react-icons/si";

function Portfolio() {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <Navbar />
      <section>
        <div className="">
          <div className="flex flex-col text-center">
            <h1 className="text-4xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500 pt-4 pb-10">
              Portfolio
            </h1>
          </div>
          <div className="flex flex-wrap">
            {/* Card 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <Link to="https://octocat-search.netlify.app/" target="_blank">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={octocat}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Octocat Search
                    </h1>
                    <p className="leading-relaxed">
                      Search Github es un proyecto que busca perfiles en GitHub.
                      Ofrece información detallada de los usuarios.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiMaterialui className="text-4xl text-green-400" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* Card 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                  src={shopMarket}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                    Shop Market App
                  </h1>
                  <p className="leading-relaxed">
                    Shop Market App es una aplicación que permite crear una
                    lista de compras. Se puede agregar, eliminar y editar.
                  </p>
                  <div className="flex justify-center mt-4 gap-4">
                    <SiReact className="text-4xl text-green-400" />
                    <SiReactrouter className="text-4xl text-green-400" />
                    <SiSass className="text-4xl text-green-400" />
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                  src={spotify}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                    Clone Spotify
                  </h1>
                  <p className="leading-relaxed">
                    Clone Spotify es una aplicación que permite buscar canciones
                    y artistas. Se puede agregar, eliminar y editar.
                  </p>
                  <div className="flex justify-center mt-4 gap-4">
                    <SiNextdotjs className="text-4xl text-green-400" />
                    <SiTailwindcss className="text-4xl text-green-400" />
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                  src={dashboard}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1 ">
                    Dashboard UI
                  </h1>
                  <p className="leading-relaxed">
                    Esta es una interfaz de usuario de un panel de
                    administración. Realizada con responsive design.
                  </p>
                  <div className="flex justify-center mt-4 gap-4">
                    <SiVite className="text-4xl text-green-400" />
                    <SiReact className="text-4xl text-green-400" />
                    <SiTailwindcss className="text-4xl text-green-400" />
                  </div>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                  src={message}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                    Message UI
                  </h1>
                  <p className="leading-relaxed">
                    Esta es una interfaz de usuario de un chat. Realizada con
                    responsive design. Se copio la UI de la página uistore.org
                  </p>
                  <div className="flex justify-center mt-4 gap-4">
                    <SiVite className="text-4xl text-green-400" />
                    <SiReact className="text-4xl text-green-400" />
                    <SiTailwindcss className="text-4xl text-green-400" />
                  </div>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                  src={portfolio}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                    My Portfolio
                  </h1>
                  <p className="leading-relaxed">
                    Este es mi primer portafolio realizado con HTML y CSS. Se
                    puso en práctica el responsive design.
                  </p>
                  <div className="flex justify-center mt-4 gap-4">
                    <SiHtml5 className="text-4xl text-green-400" />
                    <SiCss3 className="text-4xl text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
