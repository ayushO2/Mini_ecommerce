const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
} = require("../controllers/userController");

// Get Logged In User
router.get("/profile", protect, getProfile);

// Update Logged In User
router.put("/profile", protect, updateProfile);

module.exports = router;