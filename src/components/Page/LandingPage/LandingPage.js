import React, { Component } from 'react';
import GBCSection1 from './GBCSections/GBCSection1';
import GBCSection2 from './GBCSections/GBCSection2';
import GBCSection3 from './GBCSections/GBCSection3';
import GBCSection4 from './GBCSections/GBCSection4';
import ImageScroll from './ImageScroll/ImageScroll';
import Slider from './Slider/Slider';

import './LandingPage.scss';


class LandingPage extends Component {
  render() {
    const landingProps = this.props.landing === "imageScroll";

    return (
      <div className="landing">
        <main>
          <div className="page-header">
            <h1>{landingProps ? "ImageScroll Demo":"Slider Demo"}</h1>
          </div>
          <GBCSection1 />
          {landingProps ? <ImageScroll/>:<Slider/>}
          <GBCSection2 />
          <GBCSection3 />
          <GBCSection4 />
        </main>
      </div>
    );
  }
}

export default LandingPage;
