import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
  
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
  
        toast.success("Login successful! Redirecting...", { position: "top-right" });
  
        setTimeout(() => {
          navigate("/");
          window.location.reload(); // ✅ Refresh the page after navigation
        }, 2000); // Redirect after 2 seconds
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed. Try again.", { position: "top-right" });
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen w-[400px]">
      <ToastContainer />
      
      <div className="bg-transparent px-10 py-5 w-full text-center">
        <span className="text-3xl font-semibold text-gray-700">FAVjewels</span>
        <h3 className="text-lg text-gray-500 mt-2">Welcome Back</h3>

        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700"
            />
          </div>

          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-sm text-gray-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <p className="text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-gray-700 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
