const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
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
    employeeId: {
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
    address: {
        type: String,
        require: false,
        min: 3,
        max: 50,
        default: "",
    },
    status: {
        type: String,
        requie: true,
        default: "free",
        max: 10,
    }
});
module.exports = mongoose.model("Employees", employeeSchema)
