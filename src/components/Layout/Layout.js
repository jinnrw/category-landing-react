import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/PhotoCenter_SB.png';
import './Layout.scss';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ProductPage from '../Page/ProductPage/ProductPage';
import LandingPage from '../Page/LandingPage/LandingPage'
// import ThemeSelector from '../Themes/ThemeSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="header-main">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>
            {/* <ThemeSelector /> */}
          </div>
          <Navbar />
        </header>
        <main>
           { this.props.children }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
