import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "Gold Stud Earrings",
      price: "$19.99",
      oldPrice: "$24.99",
      image:
        "https://i.pinimg.com/736x/a3/60/08/a36008606a423dd879ae6addf58deeba.jpg",
      description: "A perfect blend of sophistication and simplicity, these exquisite gold stud earrings are designed for everyday elegance. Their timeless appeal makes them a must-have for any jewelry collection.",
      stock: 10,
    },
    {
      id: 2,
      name: "Silver Hoop Earrings",
      price: "$24.99",
      oldPrice: "$29.99",
      image:
        "https://i.pinimg.com/736x/a3/3d/63/a33d6300fe3303a39a56d5f01423af1e.jpg",
      description: "Crafted for versatility, these sleek silver hoop earrings add a touch of effortless charm to any outfit. Whether for casual outings or formal events, they bring a polished and refined finish to your look.",
      stock: 8,
    },
    {
      id: 3,
      name: "Pearl Drop Earrings",
      price: "$29.99",
      oldPrice: "$34.99",
      image:
        "https://i.pinimg.com/736x/68/fc/af/68fcafd4673280cc4b189821a3e6c5fa.jpg",
      description: " Graceful and enchanting, these pearl drop earrings exude timeless beauty. Their delicate design effortlessly enhances any ensemble, making them an ideal choice for both day and evening wear.",
      stock: 5,
    },
    {
      id: 4,
      name: "Diamond Studs",
      price: "$49.99",
      oldPrice: "$59.99",
      image:
        "https://i.pinimg.com/736x/6e/7d/7a/6e7d7a62219924491796cd5a134815c4.jpg",
      description: " A symbol of sophistication and elegance, these radiant diamond studs catch the light beautifully, adding a dazzling sparkle to your look. Perfect for those who appreciate understated luxury.",
      stock: 3,
    },
    {
      id: 5,
      name: "Rose Gold Hoops",
      price: "$34.99",
      oldPrice: "$39.99",
      image:
        "https://i.pinimg.com/736x/97/7e/61/977e615be137b248b523904ee898fa3d.jpg",
      description: "Chic and modern, these rose gold hoop earrings blend elegance with contemporary style. Their warm, rosy hue adds a touch of romance, making them a stunning accessory for any occasion.",
      stock: 7,
    },
    {
      id: 6,
      name: "Classic Gold Ring",
      price: "$59.99",
      oldPrice: "$69.99",
      image:
        "https://i.pinimg.com/736x/d6/ef/fa/d6effa728379aeb18f9627ee7bacf355.jpg",
      description: " A beautifully crafted gold ring that embodies classic elegance. Designed to complement every style, this exquisite piece is perfect for those who appreciate refined simplicity.",
      stock: 10,
    },
    {
      id: 7,
      name: "Sapphire Pendant",
      price: "$79.99",
      oldPrice: "$89.99",
      image:
        "https://i.pinimg.com/736x/4f/94/69/4f94699094230d949efba5611a4764ca.jpg",
      description: "A striking deep-blue sapphire set in lustrous sterling silver, this pendant is a masterpiece of refined beauty. Whether worn alone or layered, it adds a regal touch to any outfit.",
      stock: 6,
    },
    {
      id: 8,
      name: "Emerald Necklace",
      price: "$99.99",
      oldPrice: "$119.99",
      image:
        "https://i.pinimg.com/736x/1b/12/d9/1b12d9ea356ad8a563fcc6da39fd2f27.jpg",
      description: " Radiating elegance, this emerald necklace features meticulous craftsmanship and breathtaking detail. A statement piece designed to captivate and enchant.",
      stock: 4,
    },
    {
      id: 9,
      name: "Minimalist Pearl Chain",
      price: "$39.99",
      oldPrice: "$44.99",
      image:
        "https://i.pinimg.com/736x/8c/45/9d/8c459d6ba15d8dea34feafd4c11b3401.jpg",
      description: "The epitome of grace and sophistication, this dainty pearl chain necklace enhances any neckline with its refined elegance. A timeless piece that exudes pure femininity.",
      stock: 15,
    },
    {
      id: 10,
      name: "Boho Beaded Bracelet",
      price: "$14.99",
      oldPrice: "$19.99",
      image:
        "https://i.pinimg.com/736x/08/ef/61/08ef61b453cca1ba540fbd77baf75bde.jpg",
      description: "A charming and artistic piece, this bohemian-inspired bracelet features carefully selected beads, creating a relaxed yet stylish vibe. Perfect for free spirits and trendsetters.",
      stock: 20,
    },
    {
      id: 11,
      name: "Charm Bracelet",
      price: "$27.99",
      oldPrice: "$32.99",
      image:
        "https://i.pinimg.com/736x/e9/f7/cf/e9f7cf630316b1f3ce0f84284073b022.jpg",
      description: "A personal and elegant touch to your jewelry collection, this charm bracelet allows you to customize and create a meaningful piece that reflects your unique story.",
      stock: 8,
    },
    {
      id: 12,
      name: "Vintage Necklace",
      price: "$89.99",
      oldPrice: "$99.99",
      image:
        "https://i.pinimg.com/736x/ac/a1/ae/aca1ae3517730729f225afa5fe2072d9.jpg",
      description: "Inspired by antique designs, this vintage necklace is adorned with exquisite details, creating a piece that tells a story of elegance and grandeur.",
      stock: 5,
    },
    {
      id: 13,
      name: "Sterling Silver Ring",
      price: "$44.99",
      oldPrice: "$49.99",
      image:
        "https://i.pinimg.com/736x/4c/f3/09/4cf3095b3fea2491f3c99cca63b2c0fb.jpg",
      description: "Delicately designed with a sleek and polished finish, this sterling silver ring is a versatile treasure. Its understated charm makes it suitable for both casual and formal wear.",
      stock: 12,
    },
    {
      id: 14,
      name: "Crystal Stud Earrings",
      price: "$22.99",
      oldPrice: "$27.99",
      image:
        "https://i.pinimg.com/736x/82/38/e4/8238e49264e3ea30f0d3621568d33ddb.jpg",
      description: "Shiny crystal stud earrings for a glamorous look.",
      stock: 10,
    },
    {
      id: 15,
      name: "Gold Chain Necklace",
      price: "$69.99",
      oldPrice: "$79.99",
      image:
        "https://i.pinimg.com/736x/e4/11/0d/e4110d768251e11102933a193e473ebd.jpg",
      description: "Make a striking statement with this bold gold chain necklace. Designed for those who love edgy and powerful fashion, it adds an unmistakable touch of confidence and sophistication.",
      stock: 6,
    },
    {
      id: 16,
      name: "Black Onyx Bracelet",
      price: "$33.99",
      oldPrice: "$39.99",
      image:
        "https://i.pinimg.com/736x/b1/c1/2e/b1c12eae01faee357ff4ca1753a9d078.jpg",
      description: " More than just a bracelet, this captivating piece features deep black onyx stones believed to provide strength and grounding energy. A perfect blend of beauty and spirituality.",
      stock: 9,
    },
  ];

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [stock,setStock]=useState(product.stock);

  if (!product) {
    return (
      <div className="text-center text-red-500 text-xl">Product not found!</div>
    );
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  
  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };
  return (
    <div className="container mx-auto  max-w-4xl p-6 flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[600px] object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-gray-500 mt-2">SKU: 000{product.id}</p>

        {/* Price Section */}
        <div className="mt-3 text-xl">
          
          <span className="text-gray-600 font-bold">{product.price}</span>
        </div>

        {/* Stock Info */}
        <p className={`mt-2 text-lg font-medium ${stock > 0 ? "text-green-600" : "text-red-500"}`}>
        {stock > 0 ? `In Stock: ${stock} left` : "Out of Stock"}
      </p>

        {/* Quantity Selector */}
        <label className="block mt-4 text-gray-600">Quantity</label>
        <div className="flex items-center border w-32">
          <button
            onClick={handleDecrease}
            disabled={quantity === 1}
            className="px-3 py-1 font-bold disabled:opacity-50"
          >
            —
          </button>
          <input
            type="text"
            value={quantity}
            className="w-10 text-center border-x "
            readOnly
          />
          <button
            onClick={handleIncrease}
            disabled={quantity === product.stock}
            className="px-3 py-1 text-xl  disabled:opacity-50 "
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center space-x-3">
          <button
            className={`px-6 py-2 hover:cursor-pointer  ${
              product.stock > 0
                ? "bg-gray-600 text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
          <button
            className={`border px-6 py-2 hover:cursor-pointer  ${
              product.stock > 0
                ? ""
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
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
