import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-screen w-screen  flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">Sign Up</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
          onChange={handleChange}
        />
        <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-700 transition">
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
