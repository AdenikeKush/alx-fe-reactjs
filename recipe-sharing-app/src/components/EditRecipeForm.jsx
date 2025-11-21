import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    updateRecipe(recipeId, {
      title: title.trim(),
      description: description.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <label htmlFor={`edit-title-${recipeId}`}>Title</label>
        <br />
        <input
          id={`edit-title-${recipeId}`}
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <label htmlFor={`edit-description-${recipeId}`}>Description</label>
        <br />
        <textarea
          id={`edit-description-${recipeId}`}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>

      <button type="submit">Save changes</button>
    </form>
  );
};

export default EditRecipeForm;
