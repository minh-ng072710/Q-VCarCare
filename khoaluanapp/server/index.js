// < Các lib , route> //
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';

import serviceRoutes from './routes/serviceRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes)
app.use("/api/add", serviceRoutes)


// < Kết nối MongoDB , mongoose > //
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/carecare', {
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
const server = app.listen(4000, () => {
    console.log(`Server Started on PORT 4000`);
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


export default app;

