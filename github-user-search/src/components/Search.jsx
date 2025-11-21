import React, { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setResults(null);

    const data = await fetchUserData(username);
    setLoading(false);

    if (data.error) {
      setError("Looks like we cant find the user");
    } else {
      setResults(data);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setResults(null);

    const data = await fetchAdvancedUsers(username, location, minRepos);
    setLoading(false);

    if (!data.items || data.items.length === 0) {
      setError("Looks like we cant find the user");
    } else {
      setResults(data.items);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>

      {/* BASIC SEARCH */}
      <form onSubmit={handleBasicSearch} className="mb-6">
        <input
          type="text"
          placeholder="Search by username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Search
        </button>
      </form>

      {/* ADVANCED SEARCH */}
      <form onSubmit={handleAdvancedSearch} className="space-y-2 mb-6">
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Advanced Search
        </button>
      </form>

      {/* LOADING */}
      {loading && <p>Loading...</p>}

      {/* ERROR */}
      {error && <p className="text-red-600">{error}</p>}

      {/* RESULTS */}
      {results && !Array.isArray(results) && (
        <div className="border p-4 rounded">
          <img src={results.avatar_url} alt="" className="w-20 h-20 rounded-full" />
          <h2 className="text-xl font-bold">{results.login}</h2>
          <a
            className="text-blue-600 underline"
            href={results.html_url}
            target="_blank"
          >
            View Profile
          </a>
        </div>
      )}

      {Array.isArray(results) &&
        results.map((user) => (
          <div key={user.id} className="border p-4 rounded mb-2">
            <h3 className="font-semibold">{user.login}</h3>
            <a
              className="text-blue-600 underline"
              href={user.html_url}
              target="_blank"
            >
              View Profile
            </a>
          </div>
        ))}
    </div>
  );
};

export default Search;
