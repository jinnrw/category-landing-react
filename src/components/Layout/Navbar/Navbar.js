import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <label className="mobile-menu-btn" for="mobile-menu-toggle">
          <span className="visuallyhidden">Mobile menu button</span>
          <span className="lines"></span>
        </label>
        <input className="mobile-menu-toggle" type="checkbox" id="mobile-menu-toggle" />
        {/* <span className="mobile-menu-btn-lines"></span> */}
        <ul className="nav-list">
          <li className="nav-link"><a href="">Image Scroll Demo</a></li>
          <li className="nav-link"><a href="">Slider Demo</a></li>
          <li className="nav-link"><a href="">Demo 3</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
