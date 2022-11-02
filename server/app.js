const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()



app.use(cors())
app.use(volleyball)


// GET localhost:3000/recipes
// GET localhost:3000/api/recipes
app.use("/api", require("./api"))

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET localhost:3000/ => index.html
// GET localhost:3000/recipes => index.html

module.exports = app;

