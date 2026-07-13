const express = require("express");
const cors = require("cors");

// Routes
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);
// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Mini E-Commerce API is running 🚀",
  });
});

module.exports = app;