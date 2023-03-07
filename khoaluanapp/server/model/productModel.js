const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    productName: {

    },
    productContent: {

    },
    dateCreated: {

    },
    productId: {

    },
    price: {

    },
});
module.exports = mongoose.model("Products", productSchema)
