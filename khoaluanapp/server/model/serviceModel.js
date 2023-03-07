const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        min: 3,
        max: 40,
        require: true,
        unique: true,
    },
    serviceContent: {
        type: String,
        min: 3,
        max: 40,
    },
    time: {
        type: String,
        requie: true,
        default: "",
    },
    serviceId: {
        type: String,
        require: true,
        min: 5,
        max: 7,
        unique: true,
    },
    price: {
        type: String,
        require: true,
    },
});
module.exports = mongoose.model("Services", serviceSchema)
