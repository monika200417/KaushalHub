const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

// @route   GET /api/users/profile
// @desc    Protected test route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});
router.get("/all", async (req, res) => {
  const users = await require("../models/User").find();
  res.json(users);
});

module.exports = router;
