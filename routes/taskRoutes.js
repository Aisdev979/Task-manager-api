const express = require("express");
const router = express.Router();
const { getAllTasks } = require("../controllers/taskController");

// GET /api/tasks → Get all tasks
router.get("/", getAllTasks);

module.exports = router;
