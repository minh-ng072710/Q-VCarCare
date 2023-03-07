const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        min: 5,
        max: 20,
    },
    lastName: {
        type: String,
        require: true,
        min: 5,
        max: 20,
    },
    customerId: {
        type: String,
        requie: true,
        unique: true,
        min: 5,
        max: 7,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        max: 50,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 20,
    },
    password: {
        type: String,
        require: true,
        min: 6,
    },
    address: {
        type: String,
        require: false,
        min: 3,
        max: 50,
        default: "",

    },
    cars: {
        type: String,
        require: false,
        min: 5,
        max: 20,
        default: "",
    }
});
module.exports = mongoose.model("Customers", customerSchema)
