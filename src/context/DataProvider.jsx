// src/context/DataProvider.jsx
import React, { createContext, useState, useEffect } from "react";
import api from "../api/api.js";

export const Data = createContext();

const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [offers, setOffers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || ""
  );
  // Login function
  const login = async (email, password) => {
    try {
      const res = await api.post("/login", { email, password });
      // from your JSON response:
      const { token, user } = res.data;

      // Save token to state and localStorage
      setToken(token);
      localStorage.setItem("access_token", token);

      // Set default authorization header for future requests
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Save user data in state
      setUser(user);

      // Optionally fetch user profile again if needed
      // await fetchUserProfile();

      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  // Fetch locations
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await api.get("locations", { withCredentials: true });
        setLocations(res.data);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };
    fetchLocations();
  }, []);
  // Fetch offers
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await api.get("offers", { withCredentials: true });
        setOffers(res.data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };
    fetchOffers();
  }, []);
  // Fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("movies/index", { withCredentials: true });
        setMovies(res.data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  // Fetch user profile

  const fetchUserProfile = async () => {
    if (!token) return;
    try {
      setUserLoading(true); // ចាប់ផ្តើម loading
      const res = await api.get("user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user:", err);
      localStorage.removeItem("access_token");
      setUser(null);
    } finally {
      setUserLoading(false); // បញ្ចប់ loading
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    }
  }, [token]);

  // Logout
  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    setToken("");
  };

  return (
    <Data.Provider
      value={{
        movies,
        loading,
        user,
        setUser,
        userLoading,
        token,
        login,
        logout,
        fetchUserProfile,
        offers,
        setOffers,
        locations,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
