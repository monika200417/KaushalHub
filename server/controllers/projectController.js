const Project = require("../models/Project");
// const Project = require("../models/Project");
// @desc    Create a new project
// @route   POST /api/projects
// @access  Client only
const createProject = async (req, res) => {
  try {
    const { title, description, skillsRequired, budget, deadline } = req.body;

    const project = await Project.create({
      title,
      description,
      skillsRequired,
      budget,
      deadline,
      client: req.user.id,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("client", "name email");
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  createProject,
  getProjects,
};

