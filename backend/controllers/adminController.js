import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // REQUIRED FIELDS
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    // ENV CHECK
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admin Credentials",
      });
    }

    // TOKEN
    const token = generateToken("admin");

    // SUCCESS
    res.status(200).json({
      success: true,

      message: "Admin Login Successfully",

      token,

      admin: {
        email,
        role: "admin",
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

export const getAllUsers =
  async (req, res) => {

    try {

      // PAGE
      const page =
        Number(req.query.page) || 1;

      // ROLE
      const role =
        req.query.role;

      // LIMIT
      const limit = 5;

      // SKIP
      const skip =
        (page - 1) * limit;

      // FILTER
      const filter = {};

      // ROLE FILTER
      if (role) {

        filter.role = role;

      }

      // TOTAL USERS
      const totalUsers =
        await User.countDocuments(
          filter
        );

      // GET USERS
      const users =
        await User.find(
          filter
        )
          .select("-password")
          .skip(skip)
          .limit(limit)
          .sort({
            createdAt: -1,
          });

      // TOTAL PAGES
      const totalPages =
        Math.ceil(
          totalUsers / limit
        );

      // SUCCESS
      res.status(200).json({

        success: true,

        currentPage: page,

        totalPages,

        totalUsers,

        users,

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };