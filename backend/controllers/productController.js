const Product = require("../models/Product");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

exports.uploadMiddleware = upload.single("image");

exports.addProduct = async (req, res) => {
  const { name, description, price, stock, rank } = req.body;
  const product = await Product.create({
    name,
    description,
    price,
    stock,
    rank: rank || 1, // ✅ Set default rank to 1 if not provided
    image: req.file ? req.file.path : null,
  });

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

exports.getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};
