// src/services/githubService.js
import axios from 'axios';

const BASE_URL =
  import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';

// Fetch GitHub user data by username
export const fetchUserData = async (username) => {
  const url = `${BASE_URL}/users/${username}`;
  const response = await axios.get(url);
  return response.data;
};
