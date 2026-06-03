
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { createProject } from "../services/projectService";
import Button from "../components/Button";
import { toast } from "react-toastify";
function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCreateProject = async () => {
  try {
    setLoading(true);
    if (!title.trim()) {
      toast.error("Project title is required");
      return;
    }

    if (!description.trim()) {
      toast.error("Project description is required");
      return;
    }

    if (!skillsRequired.trim()) {
      toast.error("Skills are required");
      return;
    }

    if (!budget || Number(budget) <= 0) {
      toast.error("Enter a valid budget");
      return;
    }

    if (!deadline) {
      toast.error("Deadline is required");
      return;
    }
    console.log("Submitting project...");
    console.log("Project created");
    await createProject({
      title,
      description,
      skillsRequired: skillsRequired.split(","),
      budget,
      deadline,
    });

    toast.success("Project created successfully");

    setTitle("");
    setDescription("");
    setSkillsRequired("");
    setBudget("");
    setDeadline("");
  } catch (error) {
    console.log(error);
    toast.error("Failed to create project");
  } finally {
    setLoading(false);
  }
};

  return (
    <div>
      <div className="flex">
  <Sidebar />

  <div className="flex-1 p-6">

      <section className="py-10 px-2 md:px-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-4 md:p-10">
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

            <Button
  onClick={handleCreateProject}
  disabled={loading}
>
  {loading ? "Creating..." : "Create Project"}
</Button>
          </div>
        </div>
      </section>
        </div>
</div>
    </div>
  );
}

export default CreateProject;