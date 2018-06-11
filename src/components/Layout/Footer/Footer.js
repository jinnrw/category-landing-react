import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return(
      <footer id="footer">
        <div className="footer-list">
          <ul className="footer-links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
          </ul>
          <ul className="footer-links">
            <h4 className="footer-subtitle">About Costco</h4>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;