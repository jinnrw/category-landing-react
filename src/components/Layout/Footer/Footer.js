import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return(
      <footer id="footer">
        <div className="footer-list">
          <ol className="footer-links">
            <li className="footer-subtitle"><span>Quick Links</span></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
          </ol>
          <ol className="footer-links">
            <li className="footer-subtitle"><span>About Us</span></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
            <li className="footer-link"><a href="">link</a></li>
          </ol>
        </div>
      </footer>
    );
  }
}

export default Footer;