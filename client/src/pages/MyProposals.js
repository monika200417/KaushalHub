import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { getMyProposals } from "../services/proposalService";

function MyProposals() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const data = await getMyProposals();
        setProposals(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProposals();
  }, []);

  return (
    <div>
      <div className="flex">
  <Sidebar />

  <div className="flex-1 p-6">

      <section className="py-10 px-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            My Proposals
          </h1>

          <div className="space-y-6">
            {proposals.map((proposal) => (
              <Card key={proposal._id}>
                <h2 className="text-2xl font-bold text-primary mb-3">
                  {proposal.project.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {proposal.proposalText}
                </p>

                <div className="flex justify-between">
                  <p className="font-semibold">
                    ₹ {proposal.quotedPrice}
                  </p>

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm capitalize ${
                      proposal.status === "accepted"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {proposal.status}
                  </span>
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

export default MyProposals;