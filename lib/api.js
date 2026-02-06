import axios from "axios";

export const API = axios.create({
  baseURL: "http://192.168.100.106:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
