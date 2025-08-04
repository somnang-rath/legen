import React, { createContext, useState, useEffect } from "react";
import api from "../api/api.js";

export const Data = createContext();
const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("/movies", { withCredentials: true });
        console.log(res.data);
        setMovies(res.data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return <Data.Provider value={{ movies, loading }}>{children}</Data.Provider>;
};

export default DataProvider;
