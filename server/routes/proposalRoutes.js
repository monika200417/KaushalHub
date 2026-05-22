const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  createProposal,
  getProjectProposals,
  acceptProposal,
} = require("../controllers/proposalController");

// Create proposal (Freelancer)
router.post("/", protect, authorizeRoles("freelancer"), createProposal);

// Get proposals for a project (Client)
router.get(
  "/:projectId",
  protect,
  authorizeRoles("client"),
  getProjectProposals
);

// Accept proposal (Client)
router.put(
  "/:proposalId/accept",
  protect,
  authorizeRoles("client"),
  acceptProposal
);

module.exports = router;