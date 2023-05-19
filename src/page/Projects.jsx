import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar";
import MenuMobile from "../components/MenuMobile";
// Images
import octocat from "/images/octocat.png";
import shopMarket from "/images/shop-market.png";
import spotify from "/images/spotify.png";
import dashboard from "/images/dashboard.png";
import portafolio from "/images/portafolio.png";
import message from "/images/message.png";
import foodApp from "/images/food-desktop.png";
import ecommerce from "/images/platzi-app.png";
import portfolio from "/images/portfolio.png";
import starwars from "/images/starwars.png";
import pokedex from "/images/pokedex.png";
import memo from "/images/memo-app.png";
import weather from "/images/weather.png";
import kanban from "/images/kanban.png";
import tienda from "/images/tienda.png";
import card3D from "/images/card-3d.png";
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
  SiExpo,
  SiGoogleplay,
  SiVuedotjs,
  SiFramer,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Projects() {
  return (
    <>
      <div relative>
        <MenuMobile />
      </div>
      <div className="w-auto h-full pt-2 pb-2 md:p-3 overflow-y-auto">
        <Navbar />
        <section>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-3">
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista de tres pantallas de la aplicacion de ecommerce creada con React Native"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={card3D}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Nike Card 3D
                    </h1>
                    <p className="leading-relaxed">
                      Practicando animaciones 3D con Tailwind y Framer Motion.
                      Esta practica fue inspirada en un video de Youtube.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiReact className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <SiFramer className="text-4xl text-green-400" />
                      <Link to="https://nike-3d.netlify.app/" target="_blank">
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/card-3d"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista de tres pantallas de la aplicacion de ecommerce creada con React Native"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={tienda}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      E-commerce App
                    </h1>
                    <p className="leading-relaxed">
                      Aplicación de E-commerce con React Native, Expo,
                      TailwindCSS. Implementado estilos con TWRNC.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <TbBrandReactNative className="text-4xl text-green-400" />
                      <SiExpo className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://expo.dev/accounts/facuguar12/projects/tienda-app/builds/74a8156c-8ab5-4548-8bca-348d119f7f6d"
                        target="_blank"
                      >
                        <SiGoogleplay className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/tienda-app"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de Weather App"
                    className="absolute w-full h-full rounded-lg shadow-md"
                    src={weather}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Weather App
                    </h1>
                    <p className="leading-relaxed">
                      Aplicación del clima con React, Vite, TailwindCSS y
                      OpenWeatherMap API. Challenge de Personal Pay.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://weather-app-pay.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/weather-app-pay"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de Kanban App"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={kanban}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Kanban App
                    </h1>
                    <p className="leading-relaxed">
                      Tablero Kanban (drag and drop) con Vue Js y TailwindCSS.
                      Puedes crear, editar y eliminar tareas.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiVuedotjs className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://kanban-vue.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/tablero-kanban"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista de tres pantallas distintas de la aplicación de Memoria para Halloween creada con React Native"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={memo}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Memolloween App
                    </h1>
                    <p className="leading-relaxed">
                      Juego de memoria para Halloween. Desarrollado con React
                      Native y Expo. Disponible en APK.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <TbBrandReactNative className="text-4xl text-green-400" />
                      <SiExpo className="text-4xl text-green-400" />
                      <Link to="#" target="_blank">
                        <SiGoogleplay className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/memo-app"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de la aplicación de Star Wars"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={starwars}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Star Wars App
                    </h1>
                    <p className="leading-relaxed">
                      Aplicacion web que consume la API de Star Wars y muestra
                      los personajes con sus características.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://github.com/facuguardia/challenge-kairox"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Captura de dos pantallas de la app de Pokemon creada con React Native"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={pokedex}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Pokedex App
                    </h1>
                    <p className="leading-relaxed">
                      Aplicación móvil que consume la API de Pokemón y muestra
                      los pokemones con sus características.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <TbBrandReactNative className="text-4xl text-green-400" />
                      <SiExpo className="text-4xl text-green-400" />
                      <Link
                        to="https://expo.dev/artifacts/eas/ebM5DoSsNBgXuV7ytP4Jtu.apk"
                        target="_blank"
                      >
                        <SiGoogleplay className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/pokedex-app"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de la aplicación de Fast Food App Deliveri"
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
                      <Link
                        to="https://fastfood-app.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/app-food/tree/develop"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de mi portafolio web"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={portfolio}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Portfolio Web
                    </h1>
                    <p className="leading-relaxed">
                      Portafolio web creado con React, Tailwind CSS, Frame
                      Motion, React Icons y Router Dom
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiReactrouter className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://facuguardia.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/my-magnificent-portfolio"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de la aplicación de Ecommerce Platzi App"
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
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/platzi-conf-merch"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de la app de búsqueda de perfiles de GitHub"
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
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/search-github"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de la app de shop market"
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
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/react-shop"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de la ui de spotify"
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
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/spotify-next"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de la ui de dashboard"
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
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/dashboard-react"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de la ui de messenger"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                    src={message}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Messenger Service UI
                    </h1>
                    <p className="leading-relaxed">
                      Messenger Service UI es una interfaz de usuario de un
                      servicio de mensajería. Realizada con responsive design.
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                      <SiVite className="text-4xl text-green-400" />
                      <SiReact className="text-4xl text-green-400" />
                      <SiTailwindcss className="text-4xl text-green-400" />
                      <Link
                        to="https://messenger-service.netlify.app/"
                        target="_blank"
                      >
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/messenger-service"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md">
                <div className="relative">
                  <img
                    alt="Vista en desktop de mi primer portafolio"
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
                        <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                      </Link>
                      <Link
                        to="https://github.com/facuguardia/facuguardia.github.io"
                        target="_blank"
                      >
                        <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
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
