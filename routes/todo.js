const { Router } = require("express");
const {getTodos} = require("../controllers/todos")

const router = Router();

router.get("/todos", getTodos);
