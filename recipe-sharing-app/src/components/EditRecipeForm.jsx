import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows={4}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
