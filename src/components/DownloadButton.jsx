import {motion} from "framer-motion";

function DownloadButton() {
  return (
    <a
      href="/images/cv-frontend.pdf"
      download="CV-Facundo-Guardia.pdf"
      className=" bg-black text-green-500 hover:text-green-700 border-2 border-green-500 hover:border-green-700 font-bold py-2 px-4 rounded-full inline-flex items-center animate-bounce"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 transform rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
      Descargar CV
    </a>
  );
}

export default DownloadButton;
