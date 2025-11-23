const Task = require("../models/taskModel");


// Get all tasks
exports.getAllTasks = (req, res) => {
  try {
    res.status(200).json(Task);     // return tasks as JSON
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
