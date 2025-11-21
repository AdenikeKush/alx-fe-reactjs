// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        {
          id: Date.now().toString(),
          ...newRecipe,
        },
      ],
    })),

  // ✔ Corrected according to ALX expected signature
  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedFields } : recipe
      ),
    })),

  // ✔ Corrected delete function
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Optional helper
  setRecipes: (recipes) => set({ recipes }),
}));
