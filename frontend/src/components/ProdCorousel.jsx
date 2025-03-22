import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Cards from "../components/Cards";

const products = [
  {
    id: 1,
    name: "Gold Stud Earrings",
    price: "$19.99",
    image:
      "https://i.pinimg.com/736x/a3/60/08/a36008606a423dd879ae6addf58deeba.jpg",
    rank: 2,
  },
  {
    id: 2,
    name: "Silver Hoop Earrings",
    price: "$24.99",
    image:
      "https://i.pinimg.com/736x/a3/3d/63/a33d6300fe3303a39a56d5f01423af1e.jpg",
    rank: 1,
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    price: "$29.99",
    image:
      "https://i.pinimg.com/736x/68/fc/af/68fcafd4673280cc4b189821a3e6c5fa.jpg",
    rank: 3,
  },
  {
    id: 4,
    name: "Diamond Studs",
    price: "$49.99",
    image:
      "https://i.pinimg.com/736x/6e/7d/7a/6e7d7a62219924491796cd5a134815c4.jpg",
    rank: 1,
  },
  {
    id: 5,
    name: "Rose Gold Hoops",
    price: "$34.99",
    image:
      "https://i.pinimg.com/736x/97/7e/61/977e615be137b248b523904ee898fa3d.jpg",
    rank: 1,
  },
  {
    id: 6,
    name: "Classic Gold Ring",
    price: "$59.99",
    image:
      "https://i.pinimg.com/736x/d6/ef/fa/d6effa728379aeb18f9627ee7bacf355.jpg",
    rank: 6,
  },
  {
    id: 7,
    name: "Sapphire Pendant",
    price: "$79.99",
    image:
      "https://i.pinimg.com/736x/4f/94/69/4f94699094230d949efba5611a4764ca.jpg",
    rank: 1,
  },
  {
    id: 8,
    name: "Emerald Necklace",
    price: "$99.99",
    image:
      "https://i.pinimg.com/736x/1b/12/d9/1b12d9ea356ad8a563fcc6da39fd2f27.jpg",
    rank: 1,
  },
];

// Get top 8 highest-ranked products
const topRankedProducts = [...products]
  .sort((a, b) => a.rank - b.rank)
  .slice(0, 4);

const ProdCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 8;
  const totalItems = topRankedProducts.length;

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < totalItems - visibleItems) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-[1080px] h-fit flex flex-col md:flex-row justify-between items-center">
      {topRankedProducts.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProdCarousel;
