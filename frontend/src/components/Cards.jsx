import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ product }) => {
    const navigate = useNavigate();

  return (
    <div className="w-64 bg-white  hover:cursor-pointer overflow-hidden">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-0 bg-white/70 flex items-center justify-center text-gray-700 text-lg font-semibold opacity-0 group-hover:h-15 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"           onClick={() => navigate(`/product/${product.id}`)}
        >
          Quick View
        </div>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-gray-800 text-lg font-medium">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.price}</p>
      </div>
    </div>
  );
};

export default Cards;
