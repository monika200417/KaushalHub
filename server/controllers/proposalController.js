const Proposal = require("../models/Proposal");
const Project = require("../models/Project");
// @desc    Create a proposal
// @route   POST /api/proposals
// @access  Freelancer only
const createProposal = async (req, res) => {
  try {
    const { projectId, proposalText, quotedPrice } = req.body;

    const proposal = await Proposal.create({
      project: projectId,
      freelancer: req.user.id,
      proposalText,
      quotedPrice,
    });

    res.status(201).json({
      message: "Proposal submitted successfully",
      proposal,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get proposals for a project
// @route   GET /api/proposals/:projectId
// @access  Client only
const getProjectProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find({
      project: req.params.projectId,
    }).populate("freelancer", "name email");

    res.json(proposals);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// @desc    Accept a proposal
// @route   PUT /api/proposals/:proposalId/accept
// @access  Client only
const acceptProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.proposalId);

    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }

    // Accept this proposal
    proposal.status = "accepted";
    await proposal.save();

    // Reject other proposals for same project
    await Proposal.updateMany(
      { project: proposal.project, _id: { $ne: proposal._id } },
      { status: "rejected" }
    );

    // Close the project
    await Project.findByIdAndUpdate(proposal.project, {
      status: "closed",
    });

    res.json({ message: "Proposal accepted and project closed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createProposal,
  getProjectProposals,
  acceptProposal,
};