const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  createProject,
  getProjects,
  getMyProjects,
} = require("../controllers/projectController");

// @route   POST /api/projects
// @desc    Create project
// @access  Client only
router.post("/", protect, authorizeRoles("client"), createProject);
// Get logged-in client's projects
router.get(
  "/my-projects",
  protect,
  authorizeRoles("client"),
  getMyProjects
);

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get("/", getProjects);

module.exports = router;

