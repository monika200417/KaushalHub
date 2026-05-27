import { useState } from "react";
import { createProposal } from "../services/proposalService";

function ProjectCard({ project }) {
  const [showForm, setShowForm] = useState(false);

  const [proposalText, setProposalText] = useState("");
  const [quotedPrice, setQuotedPrice] = useState("");

  const handleApply = async () => {
    try {
      await createProposal({
        projectId: project._id,
        proposalText,
        quotedPrice,
      });

      alert("Proposal submitted successfully");

      setShowForm(false);
      setProposalText("");
      setQuotedPrice("");
    } catch (error) {
      console.log(error);
      alert("Failed to submit proposal");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        {project.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.skillsRequired.map((skill, index) => (
          <span
            key={index}
            className="bg-primary text-white px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold text-primary">
          ₹ {project.budget}
        </p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary hover:bg-primaryDark text-white px-5 py-2 rounded-xl"
        >
          Apply
        </button>
      </div>

      {showForm && (
        <div className="mt-4">
          <textarea
            placeholder="Write your proposal..."
            value={proposalText}
            onChange={(e) => setProposalText(e.target.value)}
            className="w-full border rounded-xl p-3 mb-3"
          />

          <input
            type="number"
            placeholder="Quoted Price"
            value={quotedPrice}
            onChange={(e) => setQuotedPrice(e.target.value)}
            className="w-full border rounded-xl p-3 mb-3"
          />

          <button
            onClick={handleApply}
            className="bg-primary hover:bg-primaryDark text-white px-5 py-2 rounded-xl"
          >
            Submit Proposal
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;