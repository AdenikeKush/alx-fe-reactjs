import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return (
      <div style={{ maxWidth: 720, margin: '40px auto', padding: '0 16px' }}>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')}>Back to list</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', padding: '0 16px' }}>
      <h1 style={{ marginBottom: 8 }}>{recipe.title}</h1>
      <p style={{ marginBottom: 20 }}>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <div style={{ marginTop: 24 }}>
        <DeleteRecipeButton recipeId={recipeId} />
      </div>

      <div style={{ marginTop: 24 }}>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
