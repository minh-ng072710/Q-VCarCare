const mongoose = require("mongoose");
const slotCarSchema = new mongoose.Schema({
    id:{
        type: String,
        require: true,
        unique: true,
        min: 1,
        
    },
    status:{
        type: String,
        requie: true,
        default: "free",
        max: 10,
    }
});
module.exports = mongoose.model("SlotCar", slotCarSchema)
