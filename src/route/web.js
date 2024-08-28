import express from "express";
// import { getHompage } from '../controller/homeController'
import homeController from '../controller/homeController'

let router = express.Router();
const initWebRout = (app) => {
  router.get("/", homeController.getHompage);

  router.get("/about", (req, res) => {
    res.send("hello Zoe");
  });

  return app.use("/", router);
};

export default initWebRout