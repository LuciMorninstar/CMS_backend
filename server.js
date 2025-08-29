import express from "express"
import connectDB from "./config/connectDB.js";

import "dotenv/config"

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/",(req,res)=>{
    res.json("Homepage");

})

app.listen(PORT, async()=>{

    console.log(`Server has been initialized at http://localhost:${PORT} `);

    await connectDB();

})

