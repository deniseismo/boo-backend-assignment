"use strict";

import express from "express";
import { addCommentAndVote } from "../controllers/commentAndVoteController.js";

const router = express.Router();

// leave a comment
router.post("/new", addCommentAndVote);

export default router;
