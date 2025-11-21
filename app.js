require("dotenv").config();
const express = require('express');

const app = express();
app.use(express.json()); // parse json files

let Task = [
    {id: 1, title: 'Buy groceries', description: 'Buy milk, eggs, and bread', status: 'pending' },
    {id: 2, title: 'Wash plates', description: 'use soap and water', status: 'pending'},
];


//validation task required
function validateTitle(req, res, next) {
    if (!req.body.title || req.body.title.trim() === "")
    {
        return res.status(400).json({ error: "Title is required"})
    }
    next();
}

//POST New - Create
app.post('/api/tasks', validateTitle, (req, res)=> {
    const newTask = { id: Task.length + 1,
        title: req.body.title,
        description: req.body.description || "",
        status: 'pending'
    };
    Task.push(newTask);
    res.status(201).json(newTask); //Echo  back
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});