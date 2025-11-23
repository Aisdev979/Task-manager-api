// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   status: {
//     type: String,
//     enum: ["pending", "completed"],
//     default: "pending"
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Task", taskSchema);

let Task = [
  {id: 1, title: 'Buy groceries', description: 'Buy milk, eggs, and bread', status: 'pending' },
  {id: 2, title: 'Wash plates', description: 'use soap and water', status: 'pending'}
];

module.exports = Task