const express = require("express");
const router = express.Router();
const { getAllTasks, createNewTask, validateTitle } = require("../controllers/taskController");

// GET /api/tasks → Get all tasks
router.get("/", getAllTasks);
router.post('/', validateTitle, createNewTask)

module.exports = router;
 