"use strict";

import express from "express";
import {
  profile_details,
  create_profile,
} from "../controllers/profileController.js";

const router = express.Router();

// a route to get profile by id
router.get("/:id", profile_details);

// a route for creating profiles
router.post("/create", create_profile);

export default router;
