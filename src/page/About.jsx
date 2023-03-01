// Components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// Images
import imgProfile from "../assets/profile.jpg";

function About() {
  return (
    <>
      <div className="p-4">
        {/* Navbar */}
        <Navbar />
        {/* Sidebar */}
        <Sidebar />
      </div>
      <div className="w-auto h-screen flex flex-col md:justify-center overflow-y-hidden p-4">
        <div className="flex justify-center items-center lg:justify-between text-center lg:text-start">
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
              className="hidden lg:block grayscale border-l-2 m-4"
            />
          </div>
        </div>
        {/* Icons */}
        <div className="flex justify-center lg:justify-start text-lg text-center text-gray-500 lg:pl-72 pt-10">
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
