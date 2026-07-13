const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ===========================
// Add Product To Cart
// ===========================
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Check Product Exists
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check if product already exists in cart
    let cartItem = await Cart.findOne({
      user: req.user.id,
      product: productId,
    });

    if (cartItem) {
      cartItem.quantity += quantity || 1;
      await cartItem.save();

      return res.status(200).json({
        success: true,
        message: "Cart Updated Successfully",
        cartItem,
      });
    }

    // Create new cart item
    cartItem = await Cart.create({
      user: req.user.id,
      product: productId,
      quantity: quantity || 1,
    });

    res.status(201).json({
      success: true,
      message: "Product Added To Cart",
      cartItem,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// ===========================
// Get User Cart
// ===========================
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.user.id }).populate(
      "product",
      "name price images"
    );

    res.status(200).json({
      success: true,
      count: cart.length,
      cart,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ===========================
// Remove Product From Cart
// ===========================
const removeFromCart = async (req, res) => {
  try {
    const cartItem = await Cart.findOneAndDelete({
      user: req.user.id,
      product: req.params.productId,
    });

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Removed From Cart",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};