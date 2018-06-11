import React, { Component } from 'react';
import logo from '../../images/pni-logo.png';
import './Layout.scss';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Marketing from '../Marketing/Marketing';
import ImageScroll from '../ImageScroll/ImageScroll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="nav-main">
          <a href="#">
            <img src={logo} alt="" className="logo" />
          </a>
          </div>
        </header>  
        <Navbar />
        <Marketing />
        <ImageScroll />
        <Footer />
      </div>
    );
  }
}

export default App;
