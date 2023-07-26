const express = require("express")
const app = express()
import Database from "./db"
app.use(express.json())
import dotenv from 'dotenv';
dotenv.config();


app.listen(process.env.port,()=>{
    Database.getInstance()
    console.log(`Server is connected on http://localhost:${process.env.port}`)
})