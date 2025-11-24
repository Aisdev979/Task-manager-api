const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

module.exports = app;
