// src/components/RecipeDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm.jsx';
import DeleteRecipeButton from './DeleteRecipeButton.jsx';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === id)
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back to recipes</button>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <button onClick={() => navigate('/')} style={{ marginBottom: '1rem' }}>
        ← Back to recipes
      </button>

      <h1>{recipe.title}</h1>
      <p>
        <strong>ID:</strong> {recipe.id}
      </p>
      <p>{recipe.description}</p>

      <button
        onClick={handleToggleFavorite}
        style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <hr />

      <h2>Edit Recipe</h2>
      <EditRecipeForm recipeId={recipe.id} />

      <hr />

      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
