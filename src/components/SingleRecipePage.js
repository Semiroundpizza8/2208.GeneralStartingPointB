import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// http://localhost:3000/recipes/1

const SingleRecipePage = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchRecipeById = async (id) => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/recipes/${id}`);

            setRecipe(response.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRecipeById(recipeId);
    }, []);

    if (loading) return <h1>Loading...</h1>;
    if (!Object.keys(recipe).length) return <h1>Looks like this recipe is empty / doesn't exist!</h1>
    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.timeToMake}</p>
            <p>{recipe.author}</p>
            <h2>Ingredients: </h2>
            {
                recipe.ingredients.map(ingredient => {
                    return <p>- {ingredient.name}</p>
                })
            }
        </div>
    );
};

export default SingleRecipePage;