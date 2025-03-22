import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-6 px-3 text-center w-screen flex justify-between items-center">
      <div className="flex justify-center space-x-6 mb-2">
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
      <p className="text-gray-600 text-sm">favmediabuisness@gmail.com</p>

      <p className="text-gray-400 text-xs mt-2">
        © 2035 by FAVjewels. Powered and secured by{" "}
        <a href="#" className="underline hover:text-gray-600">
          FAVmedia
        </a>
      </p>
    </footer>
  );
}
