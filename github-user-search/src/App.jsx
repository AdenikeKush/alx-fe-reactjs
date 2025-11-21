import React from "react";
import Search from "./components/Search.jsx";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search App</h1>
      <p>Type a GitHub username below to search.</p>
      <Search />
    </div>
  );
}

export default App;
