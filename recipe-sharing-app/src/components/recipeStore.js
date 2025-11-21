// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Search & filtering state
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      // keep filteredRecipes in sync whenever search term changes
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [
        ...state.recipes,
        {
          id: Date.now().toString(),
          ...newRecipe,
        },
      ];

      // if there is a search term, keep filtered list updated
      const updatedFiltered =
        state.searchTerm.trim() === ''
          ? updatedRecipes
          : updatedRecipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            );

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFiltered,
      };
    }),

  // Update recipe
  updateRecipe: (id, updatedFields) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedFields } : recipe
      );

      const updatedFiltered =
        state.searchTerm.trim() === ''
          ? updatedRecipes
          : updatedRecipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            );

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFiltered,
      };
    }),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== id
      );

      const updatedFiltered =
        state.searchTerm.trim() === ''
          ? updatedRecipes
          : updatedRecipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            );

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFiltered,
      };
    }),

  setRecipes: (recipes) => set({ recipes }),
}));
