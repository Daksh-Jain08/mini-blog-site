const express = require("express");

const path = require("path");
const port = 3000;
const exphbs = require("express-handlebars");

const hbs = exphbs.create();

var app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/blogs.js")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
