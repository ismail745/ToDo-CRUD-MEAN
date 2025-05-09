const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController.js');

//CRUD Routes
//get all tasks
router.get('/', getAllTasks);

//create a new task
router.post('/', createTask);

//modify a task
router.put('/:id', updateTask);

//delete a task
router.delete('/:id', deleteTask);

module.exports = router;
