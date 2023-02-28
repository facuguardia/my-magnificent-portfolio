// Components
import Navbar from "../components/Navbar";
// Images
import imgProfile from "../assets/profile.jpg";

function About() {
  return (
    <>
      <div className="pt-4 pr-4">
        <Navbar />
      </div>
      <div className="w-auto h-screen flex flex-col  md:justify-center overflow-y-hidden p-4">
        <div className="flex lg:justify-between text-center">
          <div className="flex flex-col lg:pl-20 gap-4 pt-10 md:pt-0">
            <h1 className="text-4xl font-medium text-white uppercase underline underline-offset-8 decoration-green-500">
              About
            </h1>
            <h3 className="text-sm font-bold text-gray-500">
              facuguar12@gmail.com
            </h3>
            <div>
              <p className="text-xl pl-2 pt-2 text-gray-300 ">
                Soy <b>Developer Frontend</b> altamente capacitado en una amplia
                variedad de tecnologías. Me apasiona crear soluciones digitales
                elegantes y efectivas que superen las expectativas de mis
                clientes. Como autodidacta apasionado, estoy siempre actualizado
                en las últimas tendencias y tecnologías de desarrollo web, lo
                que me permite ofrecer a mis clientes soluciones innovadoras y
                creativas que los ayudan a destacar en el mercado.
              </p>
            </div>
          </div>
          <div className="md:text-center">
            <img
              src={imgProfile}
              alt=""
              className="hidden lg:block grayscale"
            />
          </div>
        </div>
        {/* Icons */}
        <footer className="flex text-lg text-center text-gray-500 pl-24 md:pl-80 pt-10">
          <h3>
            <b className="text-white">Facundo Guardia</b>
            <hr /> Mendoza - Argentina{" "}
          </h3>
        </footer>
      </div>
    </>
  );
}

export default About;
