import axios from "axios";

export const API = axios.create({
  baseURL: "https://todo-app-with-react-native.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
