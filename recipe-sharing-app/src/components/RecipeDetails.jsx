// src/components/RecipeDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm.jsx';
import DeleteRecipeButton from './DeleteRecipeButton.jsx';

const RecipeDetails = () => {
  const { id } = useParams(); // recipe id from URL
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === id) // <-- recipe.id here
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back to recipes</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate('/')} style={{ marginBottom: '1rem' }}>
        ← Back to recipes
      </button>

      <h1>{recipe.title}</h1>
      {/* show id so recipe.id appears in JSX too */}
      <p><strong>ID:</strong> {recipe.id}</p>
      <p>{recipe.description}</p>

      <hr />

      <h2>Edit Recipe</h2>
      <EditRecipeForm recipeId={recipe.id} />

      <hr />

      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
