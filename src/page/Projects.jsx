import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
import MenuMobile from "../components/MenuMobile";
// Images
import octocat from "../assets/octocat.png";
import shopMarket from "../assets/shop-market.png";
import spotify from "../assets/spotify.png";
import dashboard from "../assets/dashboard.png";
import portafolio from "../assets/portafolio.png";
import message from "../assets/message.png";
import foodApp from "../assets/food-desktop.png";
import ecommerce from "../assets/platzi-app.png";
import portfolio from "../assets/portfolio.png";
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
  SiGooglechrome,
  SiGithub,
  SiWebpack,
  SiFirebase,
} from "react-icons/si";

function Projects() {
  return (
    <>
      <div>
        <MenuMobile />
      </div>
      <div className="w-full h-screen pt-10 pb-4 md:p-4 overflow-y-auto">
        <Navbar />
        <section>
          <div className="lg:pt-5 lg:pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app My Portfolio"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={foodApp}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Fast Food App Deliveri
                    </h1>
                    <p className="leading-relaxed">
                      Aplicación web para pedidos de comida rápida. Integración
                      con APIs como Firebase y Mercado Pago.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <SiFirebase className="text-4xl text-green-400" />
                      <Link to="#" target="_blank">
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/app-food/tree/develop"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app My Portfolio"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={portfolio}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Portfolio Web
                    </h1>
                    <p className="leading-relaxed">
                      Este es mi portafolio web busca ser una página web minimalista y elegante, 100% responsive. Toda la info en un solo lugar.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiReactrouter className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link to="https://facuguardia.netlify.app/" target="_blank">
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/my-magnificent-portfolio"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app My Portfolio"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={ecommerce}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Ecommerce Platzi App
                    </h1>
                    <p className="leading-relaxed">
                      La aplicación web permite realizar un pedido de productos
                      del Platzi Store, integración con Paypal y Google Maps.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiWebpack className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiCss3 className="text-4xl text-green-400" />
                      <SiFirebase className="text-4xl text-green-400" />
                      <Link
                        to="https://platzi-merch.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/platzi-conf-merch"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app Octocat Search"
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
                      <Link
                        to="https://octocat-search.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/search-github"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app Shop Market"
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
                      <Link
                        to="https://shop-market.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/react-shop"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 6 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app Clone Spotify"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={spotify}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Clone Spotify UI
                    </h1>
                    <p className="leading-relaxed">
                      Clone Spotify UI es una réplica de la interfaz de Spotify.
                      Se puede utilizar en dispositivos móviles y tablets.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiNextdotjs className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://next13-spotify-ui.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/spotify-next"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 7 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app Dashboard UI"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={dashboard}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1 ">
                      Dashboard UI
                    </h1>
                    <p className="leading-relaxed">
                      Dashboard UI es una interfaz de usuario de un panel de
                      administración. Realizada con responsive design.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://tailwind-dash.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/dashboard-react"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 8 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app Messenger Service UI"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={message}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Messenger Service UI
                    </h1>
                    <p className="leading-relaxed">
                      Interfaz de usuario de un chat. Realizada con responsive
                      design. Se replicó un diseño de la página uistore.org
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://messenger-service.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/messenger-service"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 8 */}
              <div className="col-span-1 p-4">
                <div className="relative">
                  <img
                    alt="Desktop app My Portfolio"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={portafolio}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      My Portfolio
                    </h1>
                    <p className="leading-relaxed">
                      Mi primer portafolio realizado con HTML y CSS. Se puso en
                      práctica el responsive design.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiHtml5 className="text-4xl text-green-400" />
                      <SiCss3 className="text-4xl text-green-400" />
                      <Link to="https://facuguardia.github.io/" target="_blank">
                        <SiGooglechrome className="text-4xl text-gray-300" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/facuguardia.github.io"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
