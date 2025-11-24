const express = require("express");
const router = express.Router();

const { getAllTasks, createNewTask, validateTitle, updateTask } = require("../controllers/taskController");

// GET /api/tasks → Get all tasks
router.get("/", getAllTasks);
router.post('/', validateTitle, createNewTask);
router.patch("/:id", updateTask);

module.exports = router;