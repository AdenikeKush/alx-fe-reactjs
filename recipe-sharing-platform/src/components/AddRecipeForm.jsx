// src/components/AddRecipeForm.jsx
import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    // At least 2 ingredients
    const ingredientsList = ingredients
      .split("\n")
      .filter((ing) => ing.trim() !== "");

    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");

    // No backend yet — simulate success
    alert("Recipe submitted successfully: " + title);

    // Reset fields after submit
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 md:p-8 rounded-lg shadow-md"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Recipe
        </h1>

        {error && (
          <p className="bg-red-100 text-red-700 px-3 py-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter recipe title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 h-28 focus:outline-none focus:border-blue-500"
            placeholder="Enter each ingredient on a new line..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 h-32 focus:outline-none focus:border-blue-500"
            placeholder="Describe the cooking steps..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
