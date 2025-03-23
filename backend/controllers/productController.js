const Product = require("../models/Product");
const multer = require("multer");
const mongoose = require("mongoose")
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// exports.uploadMiddleware = upload.single("image");

exports.addProduct = async (req, res) => {
  const { name, description, price, stock, rank,image } = req.body;
  const product = await Product.create({
    name,
    description,
    price,
    stock,
    rank: rank || 1, // ✅ Set default rank to 1 if not provided
    image
  });

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

exports.getProductDetails = async (req, res) => {
  const { id } = req.params;

  // ✅ Validate ObjectId before querying MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Product ID" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Error fetching product" });
  }
};


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
};
