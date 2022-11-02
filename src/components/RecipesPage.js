import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const dummyRecipes = [
    { name: "Recipe 1", timeToMake: 20000, author: "Louis" },
    { name: "Recipe 2", timeToMake: 30000, author: "Ben" },
    { name: "Recipe 3", timeToMake: 40000, author: "Izzy" },
    { name: "Recipe 4", timeToMake: 50000, author: "Mae" },
];

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        const response = await axios.get('/api/recipes');
        console.log(response.data);
        setRecipes(response.data);
    }

    useEffect(() => {
        fetchRecipes()
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) =>
                <Link to={`/recipes/${recipe.id}`}>
                    <div key={recipe.id} style={{ backgroundColor: "lightblue" }}>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.timeToMake}</p>
                        <p>{recipe.author}</p>
                    </div>
                </Link>
            )
            }
        </div >
    );
};

export default RecipesPage;