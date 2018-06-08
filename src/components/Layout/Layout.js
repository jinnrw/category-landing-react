import React, { Component } from 'react';
import logo from '../../images/bp-logo-desktop.png';
import './Layout.scss';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Marketing from '../Marketing/Marketing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt=""/>
        <Navbar />
        <Marketing />
        <Footer />
      </div>
    );
  }
}

export default App;
