const mongoose = require("mongoose");
const couponSchema = new mongoose.Schema({
    couponName: {

    },
    couponContent: {

    },
    dateCreated: {

    },
    couponId: {

    },
    startedDate: {

    },
    endDate: {

    },
});
module.exports = mongoose.model("Coupons", couponSchema)
