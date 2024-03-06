"use strict";

const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get("/:id", profileController.profile_details);

module.exports = router;
