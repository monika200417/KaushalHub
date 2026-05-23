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