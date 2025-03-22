import React from "react";
import Carousel from "../components/Corousel";
import ProdCarousel from "../components/ProdCorousel";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex flex-col ">
      <div className="h-full mb-10">
        <Carousel />
      </div>
      <div className="w-screen flex flex-col items-center justify-center my-10">
        <ProdCarousel />
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
