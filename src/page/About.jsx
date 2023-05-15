import LazyLoad from "react-lazy-load";
// Components
import Navbar from "../components/Navbar";
import MenuMobile from "../components/MenuMobile";
// Images
import imgProfile from "../assets/profile.jpg";

function About() {
  return (
    <>
      <div>
        <MenuMobile />
      </div>
      <div className="w-auto h-screen flex flex-col justify-center md:justify-between overflow-y-hidden p-4">
        <Navbar />
        <div className="w-auto h-screen flex flex-col lg:flex-row justify-center items-center lg:text-start">
          <div className="flex flex-col text-center lg:flex-row justify-center items-center lg:pl-20  pt-10 md:pt-0">
            <div className="pr-3">
              <h1 className="ttext-center lg:text-left text-4xl font-medium text-white underline underline-offset-8 decoration-green-500 pb-5">
                About me
              </h1>
              <div className="text-center lg:text-left">
                <p className="text-xl text-gray-300">
                  Soy un <strong className="text-green-500">desarrollador</strong>  junior con pasión por el <strong className="text-green-500">frontend</strong> y la
                  creación de soluciones digitales impactantes. Estoy al tanto
                  de las últimas tendencias y tecnologías, las aplico de
                  manera innovadora para ayudar a tus clientes a destacar. Con
                  energía positiva, perseverancia y habilidad para trabajar en
                  equipo, estoy listo para aportar mi entusiasmo y talento a tu
                  proyecto. <br /> <br /> ¡Juntos, llevaremos tus soluciones digitales al
                  siguiente nivel!
                </p>
              </div>
            </div>
            <div className="md:text-center">
              <LazyLoad once>
                <img
                  src={imgProfile}
                  alt="Developer trabajando"
                  className="hidden lg:block grayscale border-l-2 m-4"
                />
              </LazyLoad>
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="md:hidden lg:flex justify-center lg:justify-end lg:pr-[60%] lg:pb-16 text-lg text-center text-gray-500">
          <h3>
            <b className="text-white">Facundo Guardia</b>
            <hr /> Mendoza - Argentina{" "}
          </h3>
        </div>
      </div>
    </>
  );
}

export default About;
