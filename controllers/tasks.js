const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
  }
  res.status(200).json({ task, status: "Success" });
});

const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // for returning the updated taks.
    runValidators: true, // for empty names..
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
