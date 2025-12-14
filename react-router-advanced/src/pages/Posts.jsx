import React from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  // simple demo list (dynamic route: /posts/:id)
  const demoPosts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  return (
    <div>
      <h2>Posts (Dynamic Routes)</h2>
      <p>Click a post to open /posts/:id</p>

      <ul>
        {demoPosts.map((p) => (
          <li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
