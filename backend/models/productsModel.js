const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  // section will consist of either gemstones or jewellery
  section: {
    type: String,
    required: [true, "Please specify product section"],
  },
  id: {
    type: String,
    required: [true, "Please enter product ID"],
  },
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  // weight of the stone in carat
  weight: {
    type: String,
    required: false,
  },
  image: [
    {
      type: String,
      required: [true, "Please upload product images"],
    },
  ],
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  // gemstones category will include featured, sapphire, emerald , ruby
  category: {
    type: String,
    required: false,
  },
  cut: {
    type: String,
    required: false,
  },
  colour: {
    type: String,
    required: false,
  },
  clarity: {
    type: String,
    required: false,
  },
  countInStock: {
    type: Number,
    required: [true, "Please enter number of products in stock"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const products = mongoose.model("products", productsSchema);

module.exports = products;
