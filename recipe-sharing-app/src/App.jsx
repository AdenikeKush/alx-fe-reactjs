import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 720, margin: '40px auto', padding: '0 16px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Recipe Sharing App</h1>

        <Routes>
          <Route path="/" element={
            <div>
              <AddRecipeForm />
              <RecipeList />
            </div>
          } />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
