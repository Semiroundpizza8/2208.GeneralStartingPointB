import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import RecipesPage from './RecipesPage';
import SingleRecipePage from './SingleRecipePage';

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {
    return (
        <div>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/recipes">
                    <button>Recipes</button>
                </Link>
            </div>

            <Routes>
                <Route path='/recipes' element={<RecipesPage />} />
                <Route path='/recipes/:recipeId' element={<SingleRecipePage />} />
                <Route path='/' element={<h1>Home</h1>} />
            </Routes>
        </div>
    );
};

export default App;