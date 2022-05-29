const Todo = require("../models/todo");

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
    todo.save();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
