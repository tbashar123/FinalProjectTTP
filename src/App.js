import React from 'react';
import './App.css';
import foodrecipe from './foodrecipe.jpg'



class App extends React.Component{

  render(){
    return(
          <div>
              <h1> Universal Recipes </h1>

              <img src={foodrecipe} alt=""/>

            </div>
                );

  }
}

export default App;
