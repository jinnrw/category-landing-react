import React, { Component } from 'react';
import logo from '../../images/PhotoCenter_SB.png';
import './Layout.scss';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
// import ThemeSelector from '../Themes/ThemeSelector';
import GBCSection1 from '../GBCSections/GBCSection1';
import GBCSection2 from '../GBCSections/GBCSection2';
import GBCSection3 from '../GBCSections/GBCSection3';
import GBCSection4 from '../GBCSections/GBCSection4';
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
            {/* <ThemeSelector /> */}
          </div>
          <Navbar />
        </header>
        <main>
          <GBCSection1 />
          <ImageScroll />
          <GBCSection2 />
          <Slider />
          <GBCSection3 />
          <GBCSection4 />
          {/* <Marketing /> */}
          
          
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
