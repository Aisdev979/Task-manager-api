const express = require("express");
const router = express.Router();

const { getAllTasks, createNewTask, validateTitle, updateTask , getSingleTask} = require("../controllers/taskController");

// GET /api/tasks → Get all tasks
router.get("/", getAllTasks);
router.post('/', validateTitle, createNewTask);

//recent update(get single task by id)
router.get("/:id", getSingleTask);

router.patch("/:id", updateTask);

module.exports = router;