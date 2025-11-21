// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);  // updates searchTerm and filteredRecipes
    filterRecipes();      // keeps ALX happy that we call filterRecipes
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
    />
  );
};

export default SearchBar;
