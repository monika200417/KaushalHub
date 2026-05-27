import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { createProject } from "../services/projectService";
function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const handleCreateProject = async () => {
  try {
    await createProject({
      title,
      description,
      skillsRequired: skillsRequired.split(","),
      budget,
      deadline,
    });

    alert("Project created successfully");

    setTitle("");
    setDescription("");
    setSkillsRequired("");
    setBudget("");
    setDeadline("");
  } catch (error) {
    console.log(error);
    alert("Failed to create project");
  }
};

  return (
    <div>
      <div className="flex">
  <Sidebar />

  <div className="flex-1 p-6">

      <section className="py-10 px-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Create Project
          </h1>

          <div className="space-y-6">
            {/* Title */}
            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-xl p-4"
            />

            {/* Description */}
            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-xl p-4 h-40"
            />

            {/* Skills */}
            <input
              type="text"
              placeholder="Skills Required (comma separated)"
              value={skillsRequired}
              onChange={(e) => setSkillsRequired(e.target.value)}
              className="w-full border rounded-xl p-4"
            />

            {/* Budget */}
            <input
              type="number"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full border rounded-xl p-4"
            />

            {/* Deadline */}
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full border rounded-xl p-4"
            />

            {/* Button */}
            <button
                onClick={handleCreateProject}
                className="bg-primary hover:bg-primaryDark text-white px-8 py-4 rounded-xl"
    >
             Create Project
            </button>
          </div>
        </div>
      </section>
        </div>
</div>
    </div>
  );
}

export default CreateProject;