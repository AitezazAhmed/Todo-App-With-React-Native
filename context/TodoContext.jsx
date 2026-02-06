import { API } from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // fetch all todos once
  const fetchTodos = async () => {
    try {
      const res = await API.get("/todos");
      setTodos(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // add new todo
  const addTodo = async (title) => {
    try {
      const res = await API.post("/todos", { title });
      setTodos((prev) => [res.data, ...prev]); // 🔥 realtime
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
