require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "Home", 
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
    },
  });
  const upload = multer({ storage });

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.post("/api/upload", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No image uploaded" });
        }

        const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
            folder: "Home", 
            resource_type: "auto", 
        });

        console.log("Cloudinary Response:", uploadResponse);

        res.json({
            message: "Image uploaded successfully",
            imageUrl:uploadResponse.secure_url, 
        });
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        res.status(500).json({ message: "Upload failed", error });
    }
});


app.listen(5000, () => console.log('Server running on port 5000'));