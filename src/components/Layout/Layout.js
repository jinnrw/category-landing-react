import React, { Component } from 'react';
import logo from '../../images/pni-logo.png';
import './Layout.scss';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ThemeSelector from '../Themes/ThemeSelector';
import Marketing from '../Marketing/Marketing';
import ImageScroll from '../ImageScroll/ImageScroll';
import Slider from '../Slider/Slider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="header-main">
            <a href="/" className="logo">
              <img src={logo} alt="" />
            </a>
            <ThemeSelector />
          </div>
          <Navbar />
        </header>
        <main>
          <Marketing />
          <ImageScroll />
          <Slider />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
