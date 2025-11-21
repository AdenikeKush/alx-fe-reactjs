// src/services/githubService.js
import axios from "axios";

// Basic user fetch by username (from previous task)
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
};

// ⭐ Advanced GitHub user search using multiple parameters
export const searchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}`;

  const response = await axios.get(url);
  return response.data; // contains { total_count, items: [...] }
};
