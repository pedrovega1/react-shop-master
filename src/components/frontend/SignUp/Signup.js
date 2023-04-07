import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (username === "admin" && password === "17") {
      setError("");
      handleLogin(username, password);
      navigate("/"); // navigate to home page
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="max-w-[1640px] mx-auto items-center p-4 text-center py-72">
      <div className="w-[300px] h-[300px] items-center mx-auto py-10">
      <form
        onSubmit={handleSubmit}
        className=" shadow-2xl shadow-blue-500/80"
      >
        <div className="p-4 ">
          <label
            htmlFor="username"
            className="text-md text-white font-semibold"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-lg px-1 "
          />
        </div>

        <div className="p-4 ml-1">
          <label
            htmlFor="password"
            className="text-md text-white font-semibold"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg px-1"
          />
        </div>
        <div className="p-3">
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white rounded-full w-[70px] font-semibold"
          >
            Login
          </button>
        </div>
        {error && <div>{error}</div>}
      </form>
      </div>
    </div>
  );
};

export default Login;
