import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,  Switch  } from 'react-router-dom'
import Blog from './Blog';
import FoodRecipe from './FoodRecipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';


const routing = (
<Router>
    <div>

    <ul id="nav">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/FoodRecipe/">FoodRecipe</Link></li>
          <li><Link to="/Blog/">Blog</Link></li>

              </ul>

              <Switch>
                  <Route exact path="/" component={App} />
                  <Route path="/FoodRecipe" component={FoodRecipe} />
                  <Route path="/Blog" component={Blog} />

              </Switch>

              </div>
</Router>

);


ReactDOM.render( routing,  document.getElementById('root'));//<Provider store={reduxStore}>
//  <App />
//   </Provider>,


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
