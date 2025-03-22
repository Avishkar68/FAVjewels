const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId: req.user.userId });

    if (!cart) {
        cart = await Cart.create({ userId: req.user.userId, products: [{ productId, quantity }] });
    } else {
        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if (productIndex > -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }
        await cart.save();
    }

    res.json(cart);
};

exports.getCart = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user.userId }).populate('products.productId');
    res.json(cart);
};
