import React from "react";
import ReactDOM from "react-dom";
import { HomePage } from "modules/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "serviceWorker";
import "assets/styles/app.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
