import React, { useEffect, useState } from "react";
import Carousel from "../components/Corousel";
import ProdCarousel from "../components/ProdCorousel";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/all");
        setProducts(response.data);
        localStorage.setItem("products", JSON.stringify(response.data)); // ✅ Store in localStorage
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  },[])
  return (
    <div className=" w-full flex flex-col ">
      <div className="h-full mb-10">
        <Carousel />
      </div>
      <div className="w-screen flex flex-col items-center justify-center my-10">
        <ProdCarousel products={products} />
        <button
          onClick={() => navigate("/collections")}
          className="mt-4 px-6 py-2 bg-gold-500 bg-black text-white font-semibold rounded-md cursor-pointer"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default HomePage;
