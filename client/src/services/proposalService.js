import axios from "axios";

const API = "http://localhost:5000/api/proposals";

export const createProposal = async (proposalData) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(API, proposalData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
export const getMyProposals = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    "http://localhost:5000/api/proposals/my-proposals",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
export const getProjectProposals = async (projectId) => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `http://localhost:5000/api/proposals/${projectId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
export const acceptProposal = async (proposalId) => {
  const token = localStorage.getItem("token");

  const res = await axios.put(
    `http://localhost:5000/api/proposals/${proposalId}/accept`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};