import LazyLoad from "react-lazy-load";
// Components
import Navbar from "../components/Navbar";
import MenuMobile from "../components/MenuMobile";
// Images
import imgProfile from "../../public/images/profile.jpg";

function About() {
  return (
    <>
      <div>
        <MenuMobile />
      </div>
      <div className="w-auto h-full flex flex-col justify-center lg:justify-between overflow-hidden p-3">
        <Navbar />
        <div className="w-auto h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-center items-cente gap-4">
            <div className="flex flex-col justify-center gap-2 lg:pl-5">
              <h1 className="text-center lg:text-left text-4xl font-medium text-gray-100 underline underline-offset-8 decoration-green-500 pb-5">
                About me
              </h1>
              <div className="text-center lg:text-left">
                <p className="text-xl text-gray-300">
                  Soy un{" "}
                  <strong className="text-green-500">desarrollador</strong>{" "}
                  junior con pasión por el{" "}
                  <strong className="text-green-500">frontend</strong> y la
                  creación de soluciones digitales impactantes. Estoy al tanto
                  de las últimas tendencias y tecnologías, las aplico de manera
                  innovadora para ayudar a tus clientes a destacar. Con energía
                  positiva, perseverancia y habilidad para trabajar en equipo,
                  estoy listo para aportar mi entusiasmo y talento a tu
                  proyecto. <br /> <br /> ¡Juntos, llevaremos tus soluciones
                  digitales al siguiente nivel!
                </p>
              </div>
              <div className="flex justify-center lg:justify-end items-center pt-10 text-lg text-center text-gray-500">
                <h3>
                  <b className="text-gray-100 underline underline-offset-8 decoration-green-500">
                    Facundo Guardia
                  </b>{" "}
                  <br /> <p>Mendoza - Argentina</p>
                </h3>
              </div>
            </div>
            {/* Image */}
            <div className="lg:text-center">
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
      </div>
    </>
  );
}

export default About;
