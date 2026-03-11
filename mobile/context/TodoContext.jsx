import { API } from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
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
      console.log(title)
      const res = await API.post("/todos", { title });
      setTodos((prev) => [res.data, ...prev]);
    } catch (e) {
      console.log(e);
    }
  };

  // delete todo
  const deleteTodo = async (id) => {
    try {
      console.log(id)
      await API.delete(`/todos/${id}`);
      setTodos((prev) => prev.filter(todo => todo._id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  // update todo
  const updateTodo = async (id, title) => {
    console.log(id)
    try {
      const res = await API.put(`/todos/${id}`, { title });
      setTodos((prev) => prev.map(todo => 
        todo._id === id ? res.data : todo
      ));
    } catch (e) {
      console.log(e);
    }
  };
  const toggleTodo = async (id) => {
    try {
      console.log("Toggle function called with id:", id);
      const res = await API.patch(`/todos/${id}/toggle`);
      console.log("Toggle response:", res.data);
      
      setTodos((prev) => prev.map(todo => 
        todo._id === id ? res.data : todo
      ));
    } catch (e) {
      console.log("Toggle todo error:", e);
      Alert.alert("Error", "Failed to toggle todo");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ 
      todos, 
      addTodo,
      deleteTodo,
      updateTodo ,
      toggleTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};
