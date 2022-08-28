//DEPENDENCIES
const cors = require("cors");
const express = require("express");

//IMPORT CONTROLLERS
const recController = require("./controllers/recController");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/recommended", recController);

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the BJJ Guide.");
});

//Error 404 Route
app.get("*", (req, res) => {
  res.status(404).send("Something wrong! Page Not Found!");
});

// EXPORT
module.exports = app;
