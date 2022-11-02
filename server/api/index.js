const express = require("express");
const router = express.Router();

router.use('/recipes', require("./recipeRouter"));

module.exports = router;