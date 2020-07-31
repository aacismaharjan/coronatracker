import React, { Component } from 'react';
import logo from "../assets/logo.png"

class NavBar extends Component {
  state = {}
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html"><img src={logo} alt="" /></a>
        </div>
      </nav>
    );
  }
}

export default NavBar;