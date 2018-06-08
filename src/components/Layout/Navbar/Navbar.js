import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-link"><a href="">Link</a></li>
          <li className="nav-link"><a href="">Link</a></li>
          <li className="nav-link"><a href="">Link</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
