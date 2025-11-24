const Task = require("../models/taskModel");


// Get all tasks
exports.getAllTasks = (req, res) => {
  try {
    res.status(200).json(Task);     // return tasks as JSON
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


//validation task required
exports.validateTitle = (req, res, next) => {
    if (!req.body.title || req.body.title.trim() === "")
    {
        return res.status(400).json({ error: "Title is required"})
    }
    next();
}

//POST New - Create
exports.createNewTask = (req, res) => {
    const newTask = { id: Task.length + 1,
        title: req.body.title,
        description: req.body.description || "",
        status: 'pending'
    };
    Task.push(newTask);
    res.status(201).json(newTask); //Echo  back
}