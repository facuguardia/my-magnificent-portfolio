import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  const imgProduct1 = {
    hidden: {
      opacity: 0,
      y: "400px",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.10,
        ease: "easeInOut",
      },
    },
  };
  return (
      <div className="w-auto h-screen">
        <section>
          <div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3"
              variants={imgProduct1}
              initial="hidden"
              animate="show"
            >
              {/* Card */}
              <div className="col-span-1 p-4 bg-gray-800/70 rounded-md w-auto h-auto">
                <div className="relative">
                  <img
                    src={card3D}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100 cursor-pointer">
                    <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      Nike Card 3D
                    </h1>
                    <p className="leading-relaxed">
                      Practicando animaciones 3D. Click y movimientos del mouse
                      para ver la animación.
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
                    src={tienda}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={weather}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute w-full h-full rounded-lg shadow-md"
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
                    src={kanban}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={memo}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={starwars}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={pokedex}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={foodApp}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={portfolio}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={ecommerce}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={octocat}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={shopMarket}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={spotify}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={dashboard}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={message}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
                    src={portafolio}
                    alt="imagen descriptiva de la aplicación"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md"
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
            </motion.div>
          </div>
        </section>
      </div>
  );
}

export default Projects;
