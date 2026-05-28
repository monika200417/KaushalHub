import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatusBadge from "../components/StatusBadge";
import { getMyProjects } from "../services/projectService";
import Card from "../components/Card";
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
    <div className="flex">
  <Sidebar />

  <div className="flex-1 p-6">

    <section className="py-10 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          My Projects
        </h1>

        {projects.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              No Projects Yet
            </h2>

            <p className="text-gray-500">
              Start by creating your first project.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
  key={project._id}
>
                <h2 className="text-2xl font-bold text-primary mb-4">
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
                    <StatusBadge status={project.status} />
                  </p>
                </div>

                <a
                  href={`/project-proposals/${project._id}`}
                  className="bg-primary hover:bg-primaryDark text-white px-5 py-3 rounded-xl"
                >
                  View Proposals
                </a>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
      </div>
</div>
  </div>
);
}

export default MyProjects;