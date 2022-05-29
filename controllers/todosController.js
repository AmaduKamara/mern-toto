const Todo = require("../models/todoModel");

module.exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.saveTodos = async (req, res) => {
  try {
    const todo = req.body;
    await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;
    const todo = await Todo.findByIdAndDelete(_id);
    res.send(todo);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
