import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-6 px-4 text-center w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Social Media Icons */}
      <div className="flex space-x-6">
        <a href="#" className="text-black hover:text-gray-600">
          <FaFacebookF />
        </a>
        <a href="#" className="text-black hover:text-gray-600">
          <FaTwitter />
        </a>
        <a href="#" className="text-black hover:text-gray-600">
          <FaInstagram />
        </a>
      </div>

      {/* Email */}
      <p className="text-gray-600 text-sm text-center md:text-left">
        favmediabusiness@gmail.com
      </p>

      {/* Copyright Info */}
      <p className="text-gray-400 text-xs text-center">
        © 2035 by FAVjewels. Powered and secured by{" "}
        <a href="#" className="underline hover:text-gray-600">
          FAVmedia
        </a>
      </p>
    </footer>
  );
}
