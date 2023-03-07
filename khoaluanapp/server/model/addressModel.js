const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    tenThanhPho: {
        type: String,
        requie: false,
        min: 10,
        max: 30,
    },
    tenQuanHuyen: {
        type: String,
        requie: false,
        min: 10,
        max: 30,
    },
    tenThiXa: {
        type: String,
        requie: false,
        min: 10,
        max: 30,
    },
    soNha: {
        type: String,
        requie: false,
        min: 10,
        max: 30,
    },
    tenDuong: {
        type: String,
        requie: false,
        min: 10,
        max: 30,
    },
});
module.exports = mongoose.model("Address", addressSchema)
