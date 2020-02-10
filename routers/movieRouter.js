const express = require("express");
const route = express.Router();
const { movieController } = require("../controllers");

//route movie
route.post("/add-movie", movieController.addMovie);
route.delete("/delete-movie/:id", movieController.deleteMovie);
route.get("/get-movie", movieController.getMovie);
route.put("/update-movie", movieController.updateMovie);
//route movie



module.exports = route;
