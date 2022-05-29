const { Router } = require("express");
const {getTodos} = require("../controllers/todosController")

const router = Router();

router.get("/todos", getTodos);
