import React from "react";
import "./App.css";
import { HomePage } from "./assets/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
};

export default App;
