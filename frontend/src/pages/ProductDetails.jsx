import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  console.log(id)
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // ✅ Fetch product details from API
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Product not found!");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center text-gray-500 text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-xl">{error}</div>;
  if (!product) return null; // Handle case when product is null

  return (
    <div className="container mx-auto max-w-4xl p-6 flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      <div className="flex-1">
        <img src={product.image} alt={product.name} className="w-full h-[600px] object-cover" />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-gray-500 mt-2">SKU: 000{product._id}</p>

        {/* Price Section */}
        <div className="mt-3 text-xl">
          <span className="text-gray-600 font-bold">${product.price}</span>
        </div>

        {/* Stock Info */}
        <p className={`mt-2 text-lg font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
          {product.stock > 0 ? `In Stock: ${product.stock} left` : "Out of Stock"}
        </p>

        {/* Quantity Selector */}
        <label className="block mt-4 text-gray-600">Quantity</label>
        <div className="flex items-center border w-32">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            disabled={quantity === 1}
            className="px-3 py-1 font-bold disabled:opacity-50"
          >
            —
          </button>
          <input type="text" value={quantity} className="w-10 text-center border-x " readOnly />
          <button
            onClick={() => setQuantity((prev) => Math.min(product.stock, prev + 1))}
            disabled={quantity >= product.stock}
            className="px-3 py-1 text-xl  disabled:opacity-50"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center space-x-3">
          <button
            className={`px-6 py-2 hover:cursor-pointer ${product.stock > 0 ? "bg-gray-600 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
          <button
            className={`border px-6 py-2 hover:cursor-pointer ${product.stock > 0 ? "" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            disabled={product.stock === 0}
          >
            Buy Now
          </button>
        </div>

        {/* Product Description */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Product Info</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
