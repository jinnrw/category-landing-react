import React, { Component } from 'react';
import './BannerScroll.scss';

class BannerScroll extends Component {
  componentDidMount() {
    this.scrollEvent();
  }

  scrollEvent() {
    var controller = new window.ScrollMagic.Controller({
      globalSceneOptions: { // options for every scene
        triggerHook: 0.4,
      },
    });
    var scene = new window.ScrollMagic.Scene({
      triggerElement: "#scene",
      duration: 200,
    })
      .setTween("#st1", 0.5, { scale: 5.7, transformOrigin: "50% 54%" })
      // .addIndicators({ name: "1" })
      .addTo(controller); // assign the scene to the controller

    var scene2 = new window.ScrollMagic.Scene({
      triggerElement: "#scene",
      duration: 0,
      offset: 200,
    })
      .setClassToggle("#scene", "active")
      // .addIndicators({ name: "2" })
      .addTo(controller); // assign the scene to the controller


  }

  render() {
    return (
      <div className="banner-scroll">
        <div id="scene">
          <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect width="100%" height="100%" fill="white" />
            <image href="http://creative-html.pnistaging.com/demos/img/BPbanner2.jpg" width="100%" height="100%" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <defs>
              <clipPath id="mask">
                <polygon id="st1" points="742,224 588,288 753.8,410 866.7,410 951,367" />
              </clipPath>
            </defs>
            <g clip-path="url(#mask)" id="source">
              <rect width="100%" height="100%" fill="white" />
              <image href="http://creative-html.pnistaging.com/demos/img/BPbanner1.jpg" width="100%" height="100%" />
            </g>
          </svg>
        </div >

      </div >
    );
  }
}

export default BannerScroll;