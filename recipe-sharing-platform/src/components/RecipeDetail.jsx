// src/components/RecipeDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Load all recipes from data.json and find the one with matching id
    import("../data.json")
      .then((module) => {
        const data = module.default || module;
        const found = data.find((item) => String(item.id) === String(id));
        setRecipe(found || null);
      })
      .catch((error) => {
        console.error("Error loading recipe:", error);
      });
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading recipe...</p>
      </div>
    );
  }

  // Fallbacks if ingredients/instructions are not present in data.json
  const ingredients =
    recipe.ingredients || [
      "Ingredient 1",
      "Ingredient 2",
      "Ingredient 3",
    ];

  const instructions =
    recipe.instructions ||
    "Cooking instructions for this recipe will be available soon.";

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          ← Back to Home
        </Link>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-56 object-cover rounded-lg mt-4 mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Instructions
            </h2>
            <p className="text-gray-700 leading-relaxed">{instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
