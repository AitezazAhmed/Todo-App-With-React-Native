import express from "express";
import { createTodo, getTodos, updateTodo,deleteTodo,toggleTodo } from "../controllers/todo.controller.js";

const router = express.Router();
router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/toggle", toggleTodo);
export default router;
