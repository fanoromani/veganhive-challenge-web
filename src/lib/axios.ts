import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:10000",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("User-Token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    toast.error(
      error?.response?.data?.error || "There was an error with your request :("
    );

    return Promise.reject(error);
  }
);
