import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

/*
REGISTER USER
*/

// REGISTER USER

export const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password, role } = req.body;

    // ALL FIELDS REQUIRED
    if (!name || !email || !mobile || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // NAME VALIDATION
    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 2 characters",
      });
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // MOBILE VALIDATION
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "Mobile number must be 10 digits",
      });
    }

    // PASSWORD VALIDATION
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // CHECK EXISTING EMAIL
    const existingEmail = await User.findOne({
      email,
    });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // CHECK EXISTING MOBILE
    const existingMobile = await User.findOne({
      mobile,
    });

    if (existingMobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
      role,
    });

    // SUCCESS RESPONSE
    res.status(201).json({
      success: true,
      message: "Registered Successfully",

      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
LOGIN USER
*/

// LOGIN USER

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // REQUIRED FIELDS
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    // EMAIL FORMAT VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // FIND USER
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // TOKEN
    const token = generateToken(user._id);

    // SUCCESS
    res.status(200).json({
      success: true,

      message: "Login Successfully",

      token,

      user: {
        _id: user._id,
        name: user.name,
        role:user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// LOGOUT USER

export const logoutUser = async (req, res) => {
  try {
    res.status(200).json({
      success: true,

      message: "Logout Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// GET USER PROFILE

export const getUserProfile =
  async (req, res) => {

    try {

      const user =
        await User.findById(
          req.params.id
        ).select("-password");

      if (!user) {

        return res.status(404).json({

          success: false,

          message: "User not found",

        });

      }

      res.status(200).json({

        success: true,

        user,

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message: error.message,

      });

    }

  };
