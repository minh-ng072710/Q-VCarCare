const mongoose = require("mongoose");
const priceSchema = new mongoose.Schema({
    productName: {

    },
    productContent: {

    },
    dateCreated: {

    },
    productId: {

    },
});
module.exports = mongoose.model("Prices", priceSchema)
