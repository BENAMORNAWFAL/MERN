const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[3, "name must be at least 3 chars"]

    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [1, "You must at least have 1 HP"],
        max:[999999, "You are Over Powered !"]
    },
    description:{
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[3, "name must be at least 3 chars"]

    }

}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;