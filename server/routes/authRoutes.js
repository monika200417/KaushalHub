const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

// POST /api/auth/register
router.post("/register", registerUser);

// POST /api/auth/login
router.post("/login", loginUser);

module.exports = router;


router.get("/register", (req, res) => {
  res.json({ message: "Register GET route working" });
});

router.get("/login", (req, res) => {
  res.json({ message: "Login GET route working" });
});
