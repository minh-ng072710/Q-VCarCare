const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    carName: {

    },
    carType: {

    },
    datePublish: {

    },
    carId: {

    },
});
module.exports = mongoose.model("Cars", carSchema)
