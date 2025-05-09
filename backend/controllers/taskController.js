const express = require('express');
const router = express.Router();
const Task = require('../models/task');

//get all tasks
exports.getAllTasks = async (req, res) => {
    Task.find()
        .then((tasks) => {
            res.status(200).json(tasks);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

// Create a new task
exports.createTask = async (req, res) => {
    Task.create(req.body)
        .then((task) => {
            res.status(201).json(task);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

// Update a task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    Task.findByIdAndUpdate
        (id, req.body, { new: true })
        .then((task) => {
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

// Delete a task    
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    Task.findByIdAndDelete(id)
        .then((task) => {
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json({ message: 'Task deleted successfully' });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};
