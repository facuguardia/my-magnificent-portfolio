import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiGooglechrome, SiGithub } from "react-icons/si";

function Card({ data }) {
  // Animations
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
        delay: 0.1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      variants={imgProduct1}
      initial="hidden"
      animate="show"
    >
      {/* Cards */}
      {data.map((project) => {
        const { fields: projectFields, imageUrl } = project;

        return (
          <div
            key={project.sys.id}
            className="col-span-1 p-4 bg-gray-800/70 rounded-md w-auto h-auto"
          >
            <div className="relative">
              <img
                src={imageUrl}
                alt="imagen descriptiva de la aplicación"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 opacity-0 hover:opacity-100 cursor-pointer">
                <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                  {projectFields.title}
                </h1>
                <p className="leading-relaxed">{projectFields.description}</p>
                <div className="flex justify-center mt-5 gap-8">
                  <Link to={projectFields.urlDeploy} target="_blank">
                    <SiGooglechrome className="text-4xl text-gray-300 hover:text-gray-600" />
                  </Link>
                  <Link to={projectFields.urlGithub} target="_blank">
                    <SiGithub className="text-4xl text-gray-300 hover:text-gray-600" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Card;
