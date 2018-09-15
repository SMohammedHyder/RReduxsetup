import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import User from "./components/user";
import Home from "./components/home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/user" exact component={User} />
        <Route path="/" exact component={Home} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
