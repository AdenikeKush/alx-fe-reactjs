// src/components/RecommendationsList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  const handleClick = () => {
    generateRecommendations();
  };

  if (!recommendations || recommendations.length === 0) {
    return (
      <div>
        <h2>Recommended for You</h2>
        <p>No recommendations yet. Click the button to generate some.</p>
        <button onClick={handleClick}>Generate Recommendations</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      <button onClick={handleClick} style={{ marginBottom: '0.5rem' }}>
        Refresh Recommendations
      </button>
      {recommendations.map((recipe) => (
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

export default RecommendationsList;
