const Task = require("../models/taskModel");

// Get All Tasks
exports.getAllTasks = (req, res) => {
  try {
    res.status(200).json(Task);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//Get Single Task 
exports.getSingleTask= (req, res) => {
  try {
    const singleTask = Task.find(t => t.id === parseInt(req.params.id));
    if(!singleTask) return res.status(404).json({error: "Not found!"});
    res.status(200).json(singleTask); 
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
      status: req.body.status || "pending" 
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
}

//Delete task
exports.deleteTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const index = Task.findIndex(task => task.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Task not found" });
    }
  
    // removing task from Task
    Task[index].splice(index, 1);

    res.status(200).json({
      message: "Task deleted successfully",
      task: Task[index]
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

// GET Completed todos
exports.markTaskCompleted = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const index = Task.findIndex(task => task.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Merge old + setting status to completed
    Task[index] = {
      ...Task[index],
      status: "completed"
    };

    res.status(200).json({
      message: "Task marked has completed",
      task: Task[index]
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }; // Custom Read!
}

// Filter Task by Status
exports.filterTaskByStatus = (req, res) => {
  try {
    const { status } = req.query;

    const filterTask = Task.filter(t => t.status === status);
    if(!filterTask) return res.status(404).json({error: "Not found!"});
  
    res.status(200).json(filterTask);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
