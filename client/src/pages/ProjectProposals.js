import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Card from "../components/Card";
import {
  getProjectProposals,
  acceptProposal,
} from "../services/proposalService";
import { toast } from "react-toastify";
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

     toast.success("Proposal accepted");

      setProposals((prev) =>
        prev.map((proposal) =>
          proposal._id === proposalId
            ? { ...proposal, status: "accepted" }
            : proposal
        )
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to accept proposal");
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
              <Card key={proposal._id}>
                <h2 className="text-2xl font-bold text-primary mb-3">
                  ₹ {proposal.quotedPrice}
                </h2>

                <p className="text-gray-600 mb-4">
                  {proposal.proposalText}
                </p>

                <div className="flex justify-between items-center">
                  <StatusBadge status={proposal.status} />

                  {proposal.status !== "accepted" && (
                    <Button
  variant="success"
  onClick={() => handleAccept(proposal._id)}
  className="px-5 py-2"
>
  Accept
</Button>
                  )}
                </div>
              </Card>
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