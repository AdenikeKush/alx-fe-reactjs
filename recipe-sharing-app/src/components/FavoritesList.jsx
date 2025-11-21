// src/components/FavoritesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favoriteRecipes = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean)
  );

  if (!favoriteRecipes || favoriteRecipes.length === 0) {
    return (
      <div>
        <h2>My Favorites</h2>
        <p>No favorite recipes yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
