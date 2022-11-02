// GET localhost:3000/api/recipes
// GET /


const express = require('express');
const { Recipe, Ingredient } = require('../db');
const router = express.Router();

// GET localhost:3000/api/recipes
router.get('/', async (req, res, next) => {
    const recipes = await Recipe.findAll();
    res.send(recipes);
})

// GET localhost:3000/api/recipes/:id
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const recipe = await Recipe.findByPk(id, {
        include: [Ingredient]
    });
    res.send(recipe);
})

module.exports = router;