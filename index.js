const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//create app
const app = express();

//test Connection Database
const db = require("./connection");
db.connect(err => {
  if (err) throw err;
  console.log("mysql connected");
});

//set middleware(req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set cors (izin akses ke backend)
app.use(cors());

//set route
const { movieRouter, categoriesRouter, movCatRouter } = require("./routers");
app.get("/", (req, res) => {
  res.send("<center><h1>Ini Home Page </h1></center>");
});
app.use("/movie", movieRouter);
app.use("/category", categoriesRouter);
app.use("/movcat", movCatRouter);


//set port
const PORT = process.env.PORT || 7000;
app.listen(PORT, console.log(`server jalan di ${PORT} `));
