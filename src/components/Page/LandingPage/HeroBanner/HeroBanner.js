import React, { Component } from 'react';
import './HeroBanner.scss';

class HeroBanner extends Component {

  componentDidMount() {
    this.maskAnimate();
  }

  maskAnimate() {
    var slides = window.$(".slide"),
      current = 0,
      next = 1,
      tl = new window.TimelineMax({});
    window.$(slides[next]).addClass('next');
    setInterval(function () {
      tl.set(window.$(slides[next]), { className: "-=mask current" });  // Reset
      tl.set(window.$(slides[current]), { className: "-=next" });  // Reset
      tl.set(window.$(slides[current]), { className: "+=mask current" });
      tl.set(window.$(slides[next]), { className: "+=next" });
      current = next;
      if (next === 0) {
        next++;
      } else {
        next = 0;
      }
    }, 5000)
  }

  render() {
    return (
      <div className="hero-banner">
        <div class="slides">
          <img class="slide" src="https://www.costcobusinessprinting.com/dynamic/Content/images/RetailerSpecific/COSUS/carousel/BANNER2.jpg" alt="" />
          <img class="slide" src="https://www.costcobusinessprinting.com/dynamic/Content/images/RetailerSpecific/COSUS/carousel/BANNER1.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default HeroBanner;