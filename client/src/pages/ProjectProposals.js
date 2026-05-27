import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import {
  getProjectProposals,
  acceptProposal,
} from "../services/proposalService";

function ProjectProposals() {
  const { projectId } = useParams();

  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const data = await getProjectProposals(projectId);
        setProposals(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProposals();
  }, [projectId]);

  const handleAccept = async (proposalId) => {
    try {
      await acceptProposal(proposalId);

      alert("Proposal accepted");

      setProposals((prev) =>
        prev.map((proposal) =>
          proposal._id === proposalId
            ? { ...proposal, status: "accepted" }
            : proposal
        )
      );
    } catch (error) {
      console.log(error);
      alert("Failed to accept proposal");
    }
  };

  return (
    <div>
      <div className="flex">
  <Sidebar />

  <div className="flex-1 p-6">

      <section className="py-10 px-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            Project Proposals
          </h1>

          <div className="space-y-6">
            {proposals.map((proposal) => (
              <div
                key={proposal._id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h2 className="text-2xl font-bold text-primary mb-3">
                  ₹ {proposal.quotedPrice}
                </h2>

                <p className="text-gray-600 mb-4">
                  {proposal.proposalText}
                </p>

                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm capitalize ${
                      proposal.status === "accepted"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {proposal.status}
                  </span>

                  {proposal.status !== "accepted" && (
                    <button
                      onClick={() => handleAccept(proposal._id)}
                      className="bg-primary hover:bg-primaryDark text-white px-5 py-2 rounded-xl"
                    >
                      Accept
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
</div>
    </div>
  );
}

export default ProjectProposals;