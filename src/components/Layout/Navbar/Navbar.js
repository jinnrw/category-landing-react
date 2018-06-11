import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <button className="mobile-menu-btn">
          <span className="visuallyhidden">Mobile menu button</span>
          <span className="lines"></span>
        </button>
        <ul className="nav-list">
          <li className="nav-link"><a href="">Link</a></li>
          <li className="nav-link"><a href="">Link</a></li>
          <li className="nav-link"><a href="">Link</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
