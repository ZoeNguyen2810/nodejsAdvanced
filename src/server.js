import express from 'express'
import { join } from "path"
import configViewEngine from './configs/ViewEngine'
import initWebRout from './route/web'
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8800
// setup view engine
configViewEngine(app)

//init web route  
initWebRout(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})