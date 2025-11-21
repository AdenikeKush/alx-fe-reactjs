import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        backgroundColor: '#dc2626',
        color: '#fff',
        padding: '8px 12px',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
