import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";

import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

connectDB();

const app = express();

// MIDDLEWARES

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  }),
);

// ROUTES

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

// HOME ROUTE

app.get("/", (req, res) => {
  res.send("API Running...");
});

// SERVER

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
