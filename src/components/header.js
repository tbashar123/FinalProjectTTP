import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
     
      <header>
      {/* <Nav/> */}
        <div className="head">
            <h1>Universal Recipes</h1><br/><h2>We Love food,</h2>< br/> <h3>and we want you to love it too!</h3>
            <div>
              <p>“Ask not what you can do for your country. Ask what’s for lunch.”</p>
              <div><a className="contact" href="#">Contact Us</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
