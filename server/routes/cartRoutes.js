const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

const protect = require("../middleware/authMiddleware");

// Add Product
router.post("/", protect, addToCart);

// Get Cart
router.get("/", protect, getCart);

// Remove Product
router.delete("/:productId", protect, removeFromCart);

module.exports = router;