import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';

const App = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Recipe Sharing App</h1>
              <AddRecipeForm />
              <hr />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
