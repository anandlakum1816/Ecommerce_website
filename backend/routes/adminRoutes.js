import express from "express";

import { adminLogin, getAllUsers } from "../controllers/adminController.js";

import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

/*
========================================
ADMIN LOGIN
========================================
*/

router.post("/login", adminLogin);

/*
========================================
GET ALL USERS
========================================
*/

router.get("/users", authAdmin, getAllUsers);

export default router;
