import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiGooglechrome, SiGithub } from "react-icons/si";
import Spinner from "../components/Spinner";

function Projects() {
  const [data, setData] = useState([]);

  const urlApi = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        const projects = data.items || [];
        const images = data.includes.Asset || [];
        const projectsWithImages = projects.map((project) => {
          const imageId = project.fields.image.sys.id;
          const image = images.find((img) => img.sys.id === imageId);

          return {
            ...project,
            imageUrl: image?.fields?.file?.url || null,
          };
        });
        setData(projectsWithImages);
      });
  }, []);

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

  // Spinner
  if (data.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="w-auto h-screen p-4">
      <section>
        <div>
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
                      className="absolute inset-0 w-full h-full object-center rounded-lg shadow-md"
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
        </div>
      </section>
    </div>
  );
}

export default Projects;
