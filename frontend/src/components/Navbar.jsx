import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white w-screen shadow-md py-4 px-10 flex items-center justify-between">
      <div className="">
        <Link to="/" className="hover:text-gray-500">
          <span className="text-xl font-semibold text-gray-700">FAVjewels</span>
        </Link>
      </div>

      <ul className="flex space-x-6 text-gray-700">
        <li>
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/collections" className="hover:text-gray-500">
            Collections
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-gray-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-6 text-gray-500">
        <Link
          to="/login"
          className="flex items-center space-x-1 cursor-pointer hover:text-gray-400"
        >
          <FaUser />
          <span>Log In</span>
        </Link>
        <div className="relative cursor-pointer hover:text-gray-500">
          <FaShoppingBag size={20} />
          <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs px-1 rounded-full">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}
