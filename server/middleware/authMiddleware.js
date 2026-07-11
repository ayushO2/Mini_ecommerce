const jwt = require("jsonwebtoken");
const protect = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    console.log("Authorization:", token);

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided.",
      });
    }

    token = token.split(" ")[1];

    console.log("Extracted Token:", token);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();

  } catch (error) {

    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

module.exports = protect;