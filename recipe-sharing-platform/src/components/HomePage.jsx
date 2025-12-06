// src/components/HomePage.jsx
import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Dynamically import mock data from data.json
    import("../data.json")
      .then((module) => {
        // Vite / bundlers expose JSON as default export
        setRecipes(module.default || module);
      })
      .catch((error) => {
        console.error("Failed to load recipes:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Recipe Sharing Platform
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Browse delicious recipes shared by the community.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-shadow transition-transform duration-300 flex flex-col"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {recipe.summary}
                </p>
                <button className="mt-auto inline-block text-blue-600 font-medium hover:text-blue-800">
                  View Details
                </button>
              </div>
            </div>
          ))}

          {recipes.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No recipes found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
