import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

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
      <Navbar />

      <section className="py-20 px-6 bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            Project Proposals
          </h1>

          <div className="space-y-6">
            {proposals.map((proposal) => (
              <div
                key={proposal._id}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-3">
                  ₹ {proposal.quotedPrice}
                </h2>

                <p className="text-gray-600 mb-4">
                  {proposal.proposalText}
                </p>

                <div className="flex justify-between items-center">
                  <p className="font-semibold capitalize">
                    Status: {proposal.status}
                  </p>

                  {proposal.status !== "accepted" && (
                    <button
                      onClick={() => handleAccept(proposal._id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
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
  );
}

export default ProjectProposals;