import express from 'express'
import { join } from "path"
import configViewEngine from './configs/ViewEngine'
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8800

configViewEngine(app)

app.get('/', (req, res) => {
 res.render("index.ejs")
})
app.get("/about" , (req , res) => {
    res.send("hello Zoe")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})