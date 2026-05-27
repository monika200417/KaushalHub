import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import { getMyProjects } from "../services/projectService";

function MyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getMyProjects();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="py-20 px-6 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            My Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p>
                    <span className="font-semibold">
                      Budget:
                    </span>{" "}
                    ₹ {project.budget}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Status:
                    </span>{" "}
                    <span className="capitalize">
                      {project.status}
                    </span>
                  </p>
                </div>

                <a
                  href={`/project-proposals/${project._id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
                >
                  View Proposals
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyProjects;