// < Các lib , route> //
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes)
app.use("/api/add", serviceroutes)


// < Kết nối MongoDB , mongoose > //

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DB Connection Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });

// < Chạy port server> //
const server = app.listen(process.env.PORT, () => {
    console.log(`Server Started on PORT ${process.env.PORT}`);
});


// < Test kết nối db> //
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});
const MyModel = mongoose.model('Ticket', BlogPost);


app.get('/test', (req, res) => {
    const instance = new MyModel();
    instance.save(function (err) {
        console.log('ssss');
    });

    res.json({ 'test': 1 })
})



