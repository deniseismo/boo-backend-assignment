"use strict";

import express from "express";
import mongoose from "mongoose";
import profileRoutes from "./routes/profileRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

const app = express();

// prerequisites: environmental variable for setting up a mongodb server
const port = process.env.PORT || 3000;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbAdress = process.env.DB_ADDRESS;
const dbName = process.env.DB_NAME;

// set the view engine to ejs
app.set("view engine", "ejs");

// connect to mongoDB
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@${dbAdress}`;

// make sure it's not connected to a real db while testing
if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(dbURI, {
      dbName: dbName,
    })
    .then((result) => {
      app.listen(3000);
      console.log("Express started. Listening on %s", port);
    })
    .catch((err) => console.log(err));
}

// register profile routes
app.use("/profile", profileRoutes);

// comments api
app.use("/api/comment", commentRoutes);

export default app;
