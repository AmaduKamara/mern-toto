const { Router } = require("express");
const {getTodos} = require("../controllers/todos-controller")

const router = Router();

router.get("/todos", getTodos);
