// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser, FaShoppingBag, FaPlus } from "react-icons/fa";
// import axios from "axios";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [image, setImage] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [stock, setStock] = useState("");
//   const [price, setPrice] = useState("");

//   const toggleModal = () => {
//     if (isOpen) {
//       // Reset form data when closing the modal
//       setImage(null);
//       setTitle("");
//       setDescription("");
//       setStock("");
//       setPrice("");
//     }
//     setIsOpen(!isOpen);
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setImage(file);
//   };

//   const handleSubmit = async (event)=>{
//     event.preventDefault();
//     if(!image) return alert("kindly upload the product image");

//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("stock", stock);
//     formData.append("price", price);

//     try {
//       const response = await axios.post("http://localhost:5000/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Product uploaded successfully!");
//       console.log(response.data);
//       toggleModal();
//     } catch (error) {
//       console.error("Upload failed", error);
//     }

//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-white w-screen shadow-md py-4 px-10 flex items-center justify-between">
//         <div>
//           <Link to="/" className="hover:text-gray-500">
//             <span className="text-xl font-semibold text-gray-700">FAVjewels</span>
//           </Link>
//         </div>

//         <ul className="flex space-x-6 text-gray-700">
//           <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
//           <li><Link to="/collections" className="hover:text-gray-500">Collections</Link></li>
//           <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
//           <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
//         </ul>

//         <div className="flex items-center space-x-6 text-gray-500">
//           <Link to="/login" className="flex items-center space-x-1 cursor-pointer hover:text-gray-400">
//             <FaUser />
//             <span>Log In</span>
//           </Link>
//           <div className="relative cursor-pointer hover:text-gray-500">
//             <FaShoppingBag size={20} />
//             <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs px-1 rounded-full">0</span>
//           </div>
//           <div className="relative cursor-pointer hover:text-gray-500" onClick={toggleModal}>
//             <FaPlus size={20} />
//           </div>
//         </div>
//       </nav>

//       {/* Modal (Blurred Background) */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center  bg-opacity-40 backdrop-blur-md z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
//             {/* Close Button */}
//             <button className="absolute top-2 right-2 text-gray-600 text-xl" onClick={toggleModal}>
//               ✖
//             </button>
//             <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               {/* Image Upload */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Upload Image</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="w-full border p-2 rounded-md"

//                 />
//                 {image && (
//                   <img
//                     src={URL.createObjectURL(image)}
//                     alt="Preview"
//                     className="mt-2 h-24 w-full object-cover rounded-md"
//                   />
//                 )}
//               </div>

//               {/* Title */}
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full border p-2 rounded-md"
//               />

//               {/* Description */}
//               <textarea
//                 placeholder="Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="w-full border p-2 rounded-md"
//               ></textarea>

//               {/* Stock */}
//               <input
//                 type="number"
//                 placeholder="Stock"
//                 value={stock}
//                 onChange={(e) => setStock(e.target.value)}
//                 className="w-full border p-2 rounded-md"
//               />

//               {/* Price */}
//               <input
//                 type="number"
//                 placeholder="Price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="w-full border p-2 rounded-md"
//               />

//               {/* Submit Button */}
//               <button type="submit" className="w-full bg-black text-white py-2 rounded-md">
//                 Add Product
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag, FaPlus, FaTimes, FaBars } from "react-icons/fa";
import axios from "axios";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleModal = () => {
    if (isOpen) {
      setImage(null);
      setTitle("");
      setDescription("");
      setStock("");
      setPrice("");
    }
    setIsOpen(!isOpen);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) return alert("Please select an image");

    const token = localStorage.getItem("token"); // ✅ Get token from localStorage
    if (!token) return alert("No authentication token found. Please log in.");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("stock", stock);
    formData.append("price", price);

    try {
      console.log("Uploading image...");
      const uploadResponse = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // ✅ Send token in headers
          },
        }
      );

      const image = uploadResponse.data.imageUrl;
      console.log("Image uploaded:", image);

      // Now, send product data with the imageUrl to /api/products
      const productData = {
        name: title, // ✅ Send the correct field names matching backend schema
        description,
        price,
        stock,
        image, // ✅ Store Cloudinary URL
        rank: 1,
      };

      const productResponse = await axios.post(
        "http://localhost:5000/api/products/add",
        productData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ Send token in headers
          },
        }
      );

      console.log("Product added:", productResponse.data);
      alert("Product uploaded successfully!");
      toggleModal();
    } catch (error) {
      console.error("Upload failed", error);
      alert("Error uploading product.");
    }
  };

  const [isNav, setIsNav] = useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white w-screen shadow-md py-4 px-4 md:px-10 flex items-center justify-between">
        <div>
          <Link to="/" className="hover:text-gray-500">
            <span className="text-xl font-semibold text-gray-700">
              FAVjewels
            </span>
          </Link>
        </div>

        {/* <ul className="flex space-x-6 text-gray-700">
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
        </ul> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed z-10 top-0 left-0 h-full w-screen bg-white shadow-lg transform transition-transform duration-300 ${
            isNav ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-700 md:hidden"
            onClick={() => setIsNav(false)}
          >
            <FaTimes size={24} />
          </button>

          {/* Sidebar Menu Items */}
          <ul className="flex flex-col space-y-6 mt-16 text-gray-700 text-left pl-6">
            <li>
              <Link
                to="/"
                className="block p-2 hover:text-gray-500"
                onClick={() => setIsNav(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/collections"
                className="block p-2 hover:text-gray-500"
                onClick={() => setIsNav(false)}
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block p-2 hover:text-gray-500"
                onClick={() => setIsNav(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block p-2 hover:text-gray-500"
                onClick={() => setIsNav(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay (Clicking outside closes menu) */}
        {isNav && (
          <div
            className="fixed top-0 left-0 w-full h-full  bg-opacity-50 md:hidden "
            onClick={() => setIsNav(false)}
          ></div>
        )}

        <div className="flex items-center space-x-6 text-gray-500 md:mr-[-20px]">
          {user != null ? (
            <>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-400">
                <FaUser />
                <span>{user.name}</span>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center space-x-1 cursor-pointer hover:text-gray-400"
              >
                <FaUser />
                <span>Log In</span>
              </Link>
            </>
          )}
          <div className="relative cursor-pointer hover:text-gray-500">
            <FaShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
          {user?.email === "favmedia@gmail.com" && (
            <div
              className="relative cursor-pointer hover:text-gray-500"
              onClick={toggleModal}
            >
              <FaPlus size={20} />
            </div>
          )}
          {/* Hamburger Icon (Only visible on mobile) */}
          <button
            className="md:hidden hover:text-gray-500"
            onClick={() => setIsNav(!isNav)}
          >
            {isNav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 backdrop-blur-md z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl"
              onClick={toggleModal}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border p-2 rounded-md"
                />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="mt-2 h-24 w-full object-cover rounded-md"
                  />
                )}
              </div>

              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-2 rounded-md"
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2 rounded-md"
              ></textarea>
              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full border p-2 rounded-md"
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border p-2 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
