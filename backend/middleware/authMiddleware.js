import jwt from "jsonwebtoken";

import User from "../models/User.js";

const protect = async (req, res, next) => {
  try {
    let token;

    // CHECK TOKEN
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      // VERIFY TOKEN
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // FIND USER
      req.user = await User.findById(decoded.id).select("-password");

      // USER NOT FOUND
      if (!req.user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
  } catch (error) {
    // TOKEN EXPIRED
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    }

    // INVALID TOKEN
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default protect;
