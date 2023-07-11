import { useState, useEffect } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

function Projects() {
  const [data, setData] = useState([]);

  const urlApi =
    "https://cdn.contentful.com/spaces/k9322v1n7zv0/environments/master/entries?access_token=CMlQ1Mt4cucV4Zw_zvk-hYwgvlIaAFl5zyowxaDbwkg&content_type=projects";

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

  // Spinner
  if (data.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="w-auto h-screen p-4">
      <section>
        <div>
          <Card data={data} />
        </div>
      </section>
    </div>
  );
}

export default Projects;
