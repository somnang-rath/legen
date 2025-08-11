import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../context/DataProvider";
import api from "../api/api";
const Auth = (props) => {
  const { setDisplay, name, dob, address, phone, profile } = props;
  const { setUser, user } = useContext(Data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/profile");
      window.location.reload();
    }
  }, [user, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !email ||
      !password ||
      !name ||
      !dob ||
      !address ||
      !phone ||
      !profile
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // Prepare form data for Laravel
      const formData = new FormData();
      formData.append("name", name);
      formData.append("dob", dob);
      formData.append("address", address);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile", profile); // image file

      const res = await api.post("/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      localStorage.setItem("access_token", res.data.token);
      setUser(res.data.user);
      alert("User registered successfully");
    } catch (err) {
      alert("Error registering user: " + err.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 max-w-md text-xl mx-auto mt-10 bg-black/30 text-center rounded-xl space-y-16"
    >
      <h1 className="text-3xl font-bold mb-4 text-white">Sign Up</h1>

      <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90% shadow-2xl"></div>

      <input
        type="email"
        placeholder="Email"
        className="border px-4  py-2 text-xl w-full rounded focus:outline-teal-200 mb-8"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border px-4  py-2 text-xl w-full rounded focus:outline-teal-200 mb-8"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="border px-4  py-2 text-xl w-full rounded focus:outline-teal-200 mb-3"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="flex justify-between space-x-2 mt-10">
        <button
          className="bg-teal-400 text-white px-4 py-2 font-bold text-2xl w-full rounded cursor-pointer"
          onClick={() => setDisplay(0)}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-teal-400 text-white px-4 py-2 font-bold text-2xl w-full rounded cursor-pointer"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Auth;
