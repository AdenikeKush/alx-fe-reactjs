import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
