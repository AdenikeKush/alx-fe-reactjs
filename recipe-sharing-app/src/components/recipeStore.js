// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Search & filtering state
  searchTerm: '',
  filteredRecipes: [],

  // Favorites & recommendations
  favorites: [],
  recommendations: [],

  // ----- Search / filter -----
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
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

  // ----- Favorites -----
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ----- Recommendations (simple mock implementation) -----
  generateRecommendations: () =>
    set((state) => {
      // Simple example: randomly pick some recipes that are in favorites
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // ----- CRUD for recipes -----
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [
        ...state.recipes,
        {
          id: Date.now().toString(),
          ...newRecipe,
        },
      ];

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

      const updatedFavorites = state.favorites.filter(
        (favId) => favId !== id
      );

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFiltered,
        favorites: updatedFavorites,
      };
    }),

  setRecipes: (recipes) => set({ recipes }),
}));
