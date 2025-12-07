// src/components/HomePage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    import("../data.json")
      .then((module) => {
        const data = module.default || module;
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Error loading recipes:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Recipe Sharing Platform
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Browse delicious recipes shared by the community.
      </p>

      <div className="text-center mb-8">
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
        >
          + Add New Recipe
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-shadow transition-transform duration-300 cursor-pointer flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-md w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
            <span className="mt-4 text-blue-600 font-medium hover:text-blue-800">
              View Details →
            </span>
          </Link>
        ))}

        {recipes.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
