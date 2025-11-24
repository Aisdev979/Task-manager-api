const Task = require("../models/taskModel");

// Get All Tasks
exports.getAllTasks = (req, res) => {
  try {
    res.status(200).json(Task);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Validate Title Middleware
exports.validateTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  next();
};

// Create New Task
exports.createNewTask = (req, res) => {
  try {
    const newTask = {
      id: Task.length + 1,
      title: req.body.title,
      description: req.body.description || "",
      status: "pending"
    };

    Task.push(newTask);

    res.status(201).json({
      message: "Task added successfully",
      task: newTask
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update Task
exports.updateTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const index = Task.findIndex(task => task.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Merge old + new data
    Task[index] = {
      ...Task[index],
      ...req.body
    };

    res.status(200).json({
      message: "Task updated successfully",
      task: Task[index]
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};