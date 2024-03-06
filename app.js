"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const profileRoutes = require("./routes/profileRoutes");

// set the view engine to ejs
app.set("view engine", "ejs");

// profile routes
app.use("/profile", profileRoutes);

// start server
const server = app.listen(port);
console.log("Express started. Listening on %s", port);
