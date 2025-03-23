import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);

      if (response.status === 201) {
        setSuccess("Account created successfully. Redirecting...");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setTimeout(() => navigate("/"), 2000); // Redirect after 2 sec
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">Sign Up</h1>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
          onChange={handleChange}
          value={formData.password}
        />
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-700 transition"
        >
          Create Account
        </button>
      </form>

      <p className="text-gray-600 text-sm mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-gray-900 underline hover:text-gray-700">
          Log In
        </a>
      </p>
    </div>
  );
}
