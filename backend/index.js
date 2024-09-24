import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const corsOption = {
    origin: [process.env.ORIGIN]
};
const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOption));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get("/load", (req, res) => {
    const result = {"id": 1, "name": 2};
    console.log(result);
    res.result;
})

app.post("/hi", (req, res) => {
    const val = req.body["res"];
    console.log(val);
})


app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})