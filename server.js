import express from "express"

import "dotenv/config"

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/",(req,res)=>{
    res.json("Homepage");

})

app.listen(PORT,()=>{

    console.log(`Server has been initialized at http://localhost:${PORT} `);

})

