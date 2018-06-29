import React, { Component } from 'react';
import GBCSection1 from './GBCSections/GBCSection1';
import GBCSection2 from './GBCSections/GBCSection2';
import GBCSection3 from './GBCSections/GBCSection3';
import GBCSection4 from './GBCSections/GBCSection4';
import ImageScroll from './ImageScroll/ImageScroll';
import BannerScroll from './BannerScroll/BannerScroll';
import Slider from './Slider/Slider';
import HotSpot from './HotSpot/HotSpot';
import HeroBanner from './HeroBanner/HeroBanner';
import ImageAutoplay from './ImageAutoplay/ImageAutoplay';

import './LandingPage.scss';


class LandingPage extends Component {
  render() {
    const isImageScroll = this.props.landing === "imageScroll";
    const isSilder = this.props.landing === "slider";
    const isBannerScroll = this.props.landing === "BannerScroll";
    const isHotSpot = this.props.landing === "HotSpot";

    // console.log(isImageScroll)
    // console.log(isSilder)

    return (
      <div className="landing">
        <main>
          <div className="page-header">
            <h1>
              {isImageScroll && "Image Scroll Demo"}
              {isSilder && "Slider Demo"}
              {isBannerScroll && "Banner Demo"}
              {isHotSpot && "Hot Spot Demo"}
            </h1>
          </div>
          {isHotSpot && <HotSpot />}
          {isSilder && <HeroBanner />}
          <GBCSection1 />
          {isImageScroll && <ImageScroll />}
          {isSilder && <Slider />}
          {isBannerScroll && <BannerScroll />}
          <GBCSection2 />
          {isHotSpot && <ImageAutoplay />}
          <GBCSection3 />
          <GBCSection4 />
        </main>
      </div>
    );
  }
}

export default LandingPage;
