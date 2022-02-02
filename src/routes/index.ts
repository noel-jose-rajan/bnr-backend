import dotenv from "dotenv"
dotenv.config()

import express from "express";
import HeroRoute from "./hero"
import { connect } from "mongoose";


const app = express()
const port = 5000

connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.srwvg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)



app.use(express.json())
app.use("/hero", HeroRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
   console.log("Server is now Running 🕺");
   
})






  