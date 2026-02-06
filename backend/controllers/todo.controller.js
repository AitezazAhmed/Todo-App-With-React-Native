import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
console.log(title)
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await Todo.create({ title });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};
