import React from "react";
import Posts from "./Components/Posts/Posts";
import "./App.css";
import "./Styles/Media.css";
const App = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Blog posts</h1>
      </div>
      <Posts />
    </div>
  );
};

export default App;
