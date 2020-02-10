const express = require("express");
const route = express.Router();
const { categoriesController } = require("../controllers");

//route category
route.get("/get-categories", categoriesController.getCategories);
route.post("/add-categories", categoriesController.addCategories);
route.delete("/delete-categories/:id", categoriesController.deleteCategories);
route.put("/update-categories", categoriesController.updateCategories);
//route category

module.exports = route;
