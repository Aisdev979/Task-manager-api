const express = require("express");
const router = express.Router();
const { getAllTasks } = require("../controllers/taskController");
const { updateTask } = require("../controllers/taskController");

// GET /api/tasks → Get all tasks
router.get("/", getAllTasks);
router.patch("/:id", updateTask)

module.exports = router;