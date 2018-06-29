import React, { Component } from 'react';
import './CardSlider.scss';

class CardSlider extends Component {
  componentDidMount() {
    this.scrollEvent();
  }

  scrollEvent() {
    const $ = window;
    var sliderImg1 = $.$('#slider-image-card');
    var images = [];

    for (var i = 0; i < 45; i++) {
      var value = i * (-20250 / 45);
      images.push(value)
    }

    var obj = { curImg: 0 };

    // create tween
    var tween = $.TweenMax.to(obj, 0.5,
      {
        curImg: images.length,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        immediateRender: true,			// load first image automatically
        ease: $.Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          sliderImg1.css('background-position-y', images[obj.curImg])
        }
      }
    );

    // init controller
    var controller = new $.ScrollMagic.Controller();

    // build scene
    new $.ScrollMagic.Scene({ triggerElement: "#card-slider_container", duration: 500 })
      // Set fixed pin
      .setPin('#card-slider_container')
      .offset(300)
      // End of fixed pin
      .setTween(tween)
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }

  render() {
    return (
        <div id="card-slider_container" >
          <div>
            <h2 className="title">Business Cards</h2>
            <p className="desc">Full color, double-sided printing on premium 16 pt card stock</p>
          </div>
          <div className="container">
            <div id="slider-image-card" className="container"></div>
          </div>
        </div>
    );
  }
}

export default CardSlider;