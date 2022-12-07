const express = require("express");
const {
  engine
} = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3000;

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HMLHttpRequest, fetch, axios

// HTTP logger
app.use(morgan("combined"));

// Action ---> Dispatcher ---> Function handler

// Handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Home, Search, Contact

// Router Init
route(app);

app.listen(port, function () {
  console.log("This is my Nodejs");
});