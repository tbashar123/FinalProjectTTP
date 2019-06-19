import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Blog from "./Blog";
import Recipe from "./components/Recipe";
import "./index.css";
import App from "./App";

const routing = (
  <Router>
    <div>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Blog/">Blog</Link>
        </li>
        <li>
          <Link to="/Recipe/">Recipe</Link>
        </li>
        
      </ul>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Recipe" component={Recipe} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root")); //<Provider store={reduxStore}>
