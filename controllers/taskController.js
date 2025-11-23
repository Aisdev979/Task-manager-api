const Task = require("../models/taskModel");

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // fetch all tasks
    res.status(200).json(tasks);     // return tasks as JSON
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
