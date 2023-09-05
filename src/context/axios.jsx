import axios from "axios";

const instance = axios.create({
  baseURL: "https://verselet-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
