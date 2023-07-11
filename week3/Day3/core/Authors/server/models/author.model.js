const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[3, "name must be at least 3 chars"]

    },
    

}, {timestamps: true})

const Author = mongoose.model("Product", AuthorSchema);

module.exports = Author;