// src/components/RecipeList.jsx
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ marginTop: '20px' }}>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one below!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '6px',
              marginBottom: '10px',
              backgroundColor: '#fafafa',
            }}
          >
            <h3 style={{ margin: '0 0 5px' }}>{recipe.title}</h3>
            <p style={{ margin: 0 }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
