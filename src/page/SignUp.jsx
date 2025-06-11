import { useState } from "react";
import logo from "../assets/Legend-logo.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault(); // prevent page reload

    if (!email || !password || !name || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("Users", JSON.stringify(user));
    alert("Successfully signed up!");

    // Reset fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");

    navigate("/");
  };

  return (
    <div className="w-screen h-screen space-y-5 text-xl lg:flex lg:justify-center lg:items-center lg:m-auto lg:space-x-10 transition-all duration-300">
      <div className="flex flex-col justify-center items-center text-center">
        <img src={logo} alt="" className="w-[200px]" />
        <div className="text-gray-300 font-medium mt-5">
          Connect with friends and the world around you on Jobcenter.
        </div>
      </div>

      <div>
        <form
          onSubmit={handleAddUser}
          className="p-10 max-w-md text-xl mx-auto mt-10 bg-black/30 text-center rounded-xl space-y-16"
        >
          <h1 className="text-3xl font-bold mb-4 text-white">Sign Up</h1>

          <input
            type="text"
            placeholder="Full Name"
            className="border p-4 text-xl w-full rounded focus:outline-teal-200 mb-8"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-4 text-xl w-full rounded focus:outline-teal-200 mb-8"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-4 text-xl w-full rounded focus:outline-teal-200 mb-8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-4 text-xl w-full rounded focus:outline-teal-200 mb-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="bg-gray-500 h-[1px]"></div>

          <button
            type="submit"
            className="bg-teal-400 text-white px-4 py-2 font-bold text-2xl w-full rounded cursor-pointer"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
