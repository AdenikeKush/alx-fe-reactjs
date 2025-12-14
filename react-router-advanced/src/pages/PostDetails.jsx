import React from "react";
import { useParams, Link } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>PostDetails</h2>
      <p>
        Dynamic URL param: <strong>{id}</strong>
      </p>

      <Link to="/posts">← Back to Posts</Link>
    </div>
  );
}
