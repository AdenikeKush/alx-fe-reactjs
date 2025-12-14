import React from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>BlogPost</h2>
      <p>
        Blog post ID: <strong>{id}</strong>
      </p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
