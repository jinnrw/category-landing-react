import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

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
          <li className="nav-link"><Link to="/">Shop All</Link></li>
          <li className="nav-link"><Link to="slider">Slider Demo</Link></li>
          <li className="nav-link"><Link to="slider">Product Demo</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;