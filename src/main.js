const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", function (req, res) {
  res.render("New");
});

app.listen(port, function () {
  console.log("This is my Nodejs");
});
