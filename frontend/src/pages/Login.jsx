import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex  justify-center items-center h-screen w-[400px]  ">
      <div className="bg-transparent  px-10 py-5 w-full  text-center">
        {/* Logo */}
        <span className="text-3xl font-semibold text-gray-700">FAVjewels</span>

        {/* Title */}
        <h3 className="text-lg text-gray-500 mt-2">Welcome Back</h3>

        {/* Form */}
        <form className="mt-6">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-sm text-gray-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-800 transition">
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Sign Up Link */}
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
