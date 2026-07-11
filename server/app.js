const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

app.get("/api/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route Accessed Successfully",
    user: req.user,
  });
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mini E-Commerce API is running 🚀",
  });
});

module.exports = app;