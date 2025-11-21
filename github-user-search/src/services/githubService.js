import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL || "https://api.github.com";

// BASIC USER SEARCH
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    return { error: true };
  }
};

// ADVANCED USER SEARCH
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
    );

    return response.data;
  } catch (error) {
    return { items: [] };
  }
};
