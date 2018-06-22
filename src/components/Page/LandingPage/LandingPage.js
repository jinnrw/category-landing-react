import React, { Component } from 'react';
import GBCSection1 from './GBCSections/GBCSection1';
import GBCSection2 from './GBCSections/GBCSection2';
import GBCSection3 from './GBCSections/GBCSection3';
import GBCSection4 from './GBCSections/GBCSection4';
import ImageScroll from './ImageScroll/ImageScroll';
import BannerScroll from './BannerScroll/BannerScroll';
import Slider from './Slider/Slider';

import './LandingPage.scss';


class LandingPage extends Component {
  render() {
    const isImageScroll = this.props.landing === "imageScroll";
    const isSilder = this.props.landing === "slider";
    const isBannerScroll = this.props.landing === "BannerScroll";

    return (
      <div className="landing">
        <main>
          <div className="page-header">
            <h1>
              {isImageScroll && "Image Scroll Demo"}
              {isSilder && "Slider Demo"}
              {isBannerScroll && "Banner Demo"}
            </h1>
          </div>
          <GBCSection1 />
          {isImageScroll && <ImageScroll />}
          {isSilder && <Slider />}
          {isBannerScroll && <BannerScroll />}
          <GBCSection2 />
          <GBCSection3 />
          <GBCSection4 />
        </main>
      </div>
    );
  }
}

export default LandingPage;
