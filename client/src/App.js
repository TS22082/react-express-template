import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  axios.get("/example").then(result => console.log(result));
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
