// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmed = username.trim();
    if (!trimmed) {
      return;
    }

    setStatus('loading');
    setUser(null);

    try {
      const data = await fetchUserData(trimmed);
      setUser(data);
      setStatus('success');
    } catch (error) {
      console.error('Error fetching user:', error);
      setStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <label htmlFor="github-username" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Search GitHub user
        </label>
        <input
          id="github-username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '0.5rem', width: '60%', maxWidth: '300px', marginRight: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Search
        </button>
      </form>

      {status === 'loading' && <p>Loading...</p>}

      {status === 'error' && <p>Looks like we cant find the user</p>}

      {status === 'success' && user && (
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            maxWidth: '400px',
          }}
        >
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>
          <p>
            <strong>Username:</strong> {user.login}
          </p>
          <p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
