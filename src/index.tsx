import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { HomePageDataContainerWrapped as HomePage } from "modules/HomePage/DataContainer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "serviceWorker";
import "styles/app.css";
import { rootReducer } from "rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState } from "config/store";

let store = createStore(rootReducer, initialState, composeWithDevTools());

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
