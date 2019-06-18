import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,  Switch  } from 'react-router-dom'
import './index.css';
import App from './App';


const routing = (

<Router>
    <div>

    <ul id="nav">
         <li><Link to="/">Home</Link></li>


              </ul>

              <Switch>
                  <Route exact path="/" component={App} />


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
