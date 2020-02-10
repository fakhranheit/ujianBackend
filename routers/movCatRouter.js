const express = require("express");
const route = express.Router();
const { movCatcontroller } = require("../controllers");

route.get("/get-movcat", movCatcontroller.getMovcat);
route.post("/add-movcat", movCatcontroller.addMovCat);
route.delete("/delete-movcat/:id", movCatcontroller.deleteMovCat);

module.exports = route;
