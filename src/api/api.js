import axios from "axios";

const api = axios.create({
  baseURL: "https://legen.somnang12.us/api/",
  withCredentials: true,
});

export default api;
