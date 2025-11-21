// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import SearchBar from './components/SearchBar.jsx';
import FavoritesList from './components/FavoritesList.jsx';
import RecommendationsList from './components/RecommendationsList.jsx';

const App = () => {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Recipe Sharing App</h1>
                <AddRecipeForm />
                <SearchBar />
                <hr />
                <RecipeList />
                <hr />
                <FavoritesList />
                <hr />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
