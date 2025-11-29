const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  validateTitle,
  updateTask,
  deleteTask,
  getSingleTask,
  filterTaskByStatus,
  markTaskCompleted,
} = require("../controllers/taskController");

// GET /api/tasks → Get all tasks
router.get("/", getAllTasks);
router.post("/", validateTitle, createNewTask);

router.get("/filter", filterTaskByStatus);

//recent update(get single task by id)
router.get("/:id", getSingleTask);

router.patch("/:id", updateTask);
router.patch("/:id/completed", markTaskCompleted);

router.delete("/:id", deleteTask);

module.exports = router;
