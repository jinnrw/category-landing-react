import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return(
      <footer id="footer">
        <div className="footer-list">
          <ol className="footer-links">
            <li className="footer-subtitle"><span>Quick Links</span></li>
            <li className="footer-link"><a href="#">My Photos</a></li>
            <li className="footer-link"><a href="#">My Projects</a></li>
            <li className="footer-link"><a href="#">Shop All Products</a></li>
            <li className="footer-link"><a href="#">Mobile App</a></li>
            <li className="footer-link"><a href="#">Group Rooms</a></li>
            <li className="footer-link"><a href="#">Order Status</a></li>
            <li className="footer-link"><a href="#">Image Galleries</a></li>
            <li className="footer-link"><a href="#">Inspiration Blog</a></li>
            <li className="footer-link"><a href="#">Help</a></li>
          </ol>
          <ol className="footer-links">
            <li className="footer-subtitle"><span>About Us</span></li>
            <li className="footer-link"><a href="#">Contact Us</a></li>
            <li className="footer-link"><a href="#">Pricing</a></li>
            <li className="footer-link"><a href="#">Storage Policy</a></li>
            <li className="footer-link"><a href="#">Privacy</a></li>
            <li className="footer-link"><a href="#">Terms and Conditions</a></li>
            <li className="footer-link"><a href="#">Print Profiles</a></li>
            <li className="footer-link"><a href="#">Costco Business Printing</a></li>
            <li className="footer-link"><a href="#">Costco.com</a></li>
          </ol>
          <ol className="footer-links">
            <li className="footer-subtitle"><span>Products</span></li>
            <li className="footer-link"><a href="#">Art &amp; Image Gallery</a></li>
            <li className="footer-link"><a href="#">Calendars</a></li>
            <li className="footer-link"><a href="#">Canvas Prints</a></li>
            <li className="footer-link"><a href="#">Collage Prints</a></li>
            <li className="footer-link"><a href="#">Disney Gallery</a></li>
            <li className="footer-link"><a href="#">Greeting Cards</a></li>
            <li className="footer-link"><a href="#">Metal Prints</a></li>
          </ol>
          <ol className="footer-links">
            <li className="footer-subtitle"><span></span></li>
            <li className="footer-link"><a href="#">Mugs</a></li>
            <li className="footer-link"><a href="#">Photo Books</a></li>
            <li className="footer-link"><a href="#">Photo USB &amp; DVD</a></li>
            <li className="footer-link"><a href="#">Photo Plaques</a></li>
            <li className="footer-link"><a href="#">Photo Throw</a></li>
            <li className="footer-link"><a href="#">Poster Boards</a></li>
            <li className="footer-link"><a href="#">Sports Gallery</a></li>
          </ol>
        </div>

        <div class="copyright">
          <p>&copy; 1998 — 2018 Costco Wholesale Corporation. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;