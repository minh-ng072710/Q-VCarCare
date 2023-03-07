const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
    serviceName: {

    },
    serviceContent: {

    },
    dateCreated: {

    },
    serviceId: {

    },
    price: {

    },
});
module.exports = mongoose.model("Services", serviceSchema)
