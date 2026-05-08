//authAdmin.js
import jwt from "jsonwebtoken";

const authAdmin = async (
  req,
  res,
  next
) => {

  try {

    let token;

    // CHECK TOKEN
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(
        "Bearer"
      )
    ) {

      token =
        req.headers.authorization.split(
          " "
        )[1];

      // VERIFY TOKEN
      const decoded =
        jwt.verify(
          token,
          process.env.JWT_SECRET
        );

      // CHECK ADMIN
      if (
        decoded.id !==
        "admin"
      ) {

        return res.status(401).json({

          success: false,

          message:
            "Not Authorized Admin",

        });

      }

      next();

    } else {

      return res.status(401).json({

        success: false,

        message:
          "No token provided",

      });

    }

  } catch (error) {

    // TOKEN EXPIRED
    if (
      error.name ===
      "TokenExpiredError"
    ) {

      return res.status(401).json({

        success: false,

        message:
          "Token expired",

      });

    }

    // INVALID TOKEN
    return res.status(401).json({

      success: false,

      message:
        "Invalid token",

    });

  }

};

export default authAdmin;