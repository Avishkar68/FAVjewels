import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const Collections = () => {

  // const products = [
  //   { id: 1, name: "Gold Stud Earrings", price: "$19.99", image: "https://i.pinimg.com/736x/a3/60/08/a36008606a423dd879ae6addf58deeba.jpg" },
  //   { id: 2, name: "Silver Hoop Earrings", price: "$24.99", image: "https://i.pinimg.com/736x/a3/3d/63/a33d6300fe3303a39a56d5f01423af1e.jpg" },
  //   { id: 3, name: "Pearl Drop Earrings", price: "$29.99", image: "https://i.pinimg.com/736x/68/fc/af/68fcafd4673280cc4b189821a3e6c5fa.jpg" },
  //   { id: 4, name: "Diamond Studs", price: "$49.99", image: "https://i.pinimg.com/736x/6e/7d/7a/6e7d7a62219924491796cd5a134815c4.jpg" },
  //   { id: 5, name: "Rose Gold Hoops", price: "$34.99", image: "https://i.pinimg.com/736x/97/7e/61/977e615be137b248b523904ee898fa3d.jpg" },
  //   { id: 6, name: "Classic Gold Ring", price: "$59.99", image: "https://i.pinimg.com/736x/d6/ef/fa/d6effa728379aeb18f9627ee7bacf355.jpg" },
  //   { id: 7, name: "Sapphire Pendant", price: "$79.99", image: "https://i.pinimg.com/736x/4f/94/69/4f94699094230d949efba5611a4764ca.jpg" },
  //   { id: 8, name: "Emerald Necklace", price: "$99.99", image: "https://i.pinimg.com/736x/1b/12/d9/1b12d9ea356ad8a563fcc6da39fd2f27.jpg" },
  //   { id: 9, name: "Minimalist Pearl Chain", price: "$39.99", image: "https://i.pinimg.com/736x/8c/45/9d/8c459d6ba15d8dea34feafd4c11b3401.jpg" },
  //   { id: 10, name: "Boho Beaded Bracelet", price: "$14.99", image: "https://i.pinimg.com/736x/08/ef/61/08ef61b453cca1ba540fbd77baf75bde.jpg" },
  //   { id: 11, name: "Charm Bracelet", price: "$27.99", image: "https://i.pinimg.com/736x/e9/f7/cf/e9f7cf630316b1f3ce0f84284073b022.jpg" },
  //   { id: 12, name: "Vintage Necklace", price: "$89.99", image: "https://i.pinimg.com/736x/ac/a1/ae/aca1ae3517730729f225afa5fe2072d9.jpg" },
  //   { id: 13, name: "Sterling Silver Ring", price: "$44.99", image: "https://i.pinimg.com/736x/4c/f3/09/4cf3095b3fea2491f3c99cca63b2c0fb.jpg" },
  //   { id: 14, name: "Crystal Stud Earrings", price: "$22.99", image: "https://i.pinimg.com/736x/82/38/e4/8238e49264e3ea30f0d3621568d33ddb.jpg" },
  //   { id: 15, name: "Gold Chain Necklace", price: "$69.99", image: "https://i.pinimg.com/736x/e4/11/0d/e4110d768251e11102933a193e473ebd.jpg" },
  //   { id: 16, name: "Black Onyx Bracelet", price: "$33.99", image: "https://i.pinimg.com/736x/b1/c1/2e/b1c12eae01faee357ff4ca1753a9d078.jpg" },
  // ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ Get products from localStorage
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts)); // ✅ Parse JSON and update state
    }
  }, []);

  return (
    <div className=' w-screen '>
    <div className="container mx-auto w-[1250px]  p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Our Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Cards key={product._id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Collections