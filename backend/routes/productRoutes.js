const express = require('express');
const { addProduct, deleteProduct, getProductDetails, uploadMiddleware } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', authMiddleware, uploadMiddleware, addProduct);
router.delete('/delete/:id', authMiddleware, deleteProduct);
router.get('/:id', getProductDetails);

module.exports = router;
