import React, { Component } from 'react';
import './ImageScroll.scss';

class ImageScroll extends Component {
  componentDidMount() {
    this.scrollEvent();
  }

  scrollEvent() {
    var controller = new window.ScrollMagic.Controller({
      globalSceneOptions: { // options for every scene
        triggerHook: 0.15
      },
    });
    var tweenSceneEnter = new window.TimelineMax({});
    tweenSceneEnter.fromTo("#scene", 1, { "-webkit-mask-size": "180px" },
      { "-webkit-mask-size": "450px" });
    tweenSceneEnter.to("#background", 1, { scale: 1.6 }, 0);

    var tweenSceneLeave = new window.TimelineMax({});
    tweenSceneLeave.to("#scene", 1, { "-webkit-mask-size": "1000px" });
    tweenSceneLeave.to("#background", 2, { scale: 1 }, 0.1);

    // Scene On Enter
    new window.ScrollMagic.Scene({ triggerElement: "#scene", duration: 500 })
      .offset(-10)
      .setPin('#scene')
      .setTween(tweenSceneEnter)
      // .addIndicators({name: "onEnter"}) // add indicators (requires plugin)
      .addTo(controller)

    // Background onLeave
    new window.ScrollMagic.Scene({ triggerElement: "#scene", duration: 500, offset: 490 })
      .setPin('#scene')
      .setTween(tweenSceneLeave)
      // .addIndicators({name: "onLeave"}) // add indicators (requires plugin)
      .addTo(controller)


  }

  render() {
    return (
      <div className="image-scroll">
        <div id="scene" className="mask">
          <div className="image-scroll_title">
            <h2 className="title">Business Cards</h2>
            <p className="desc">Full color, double-sided printing on premium 16 pt card stock</p>
          </div>
          <div id="background">
            <img
              src="https://cosus-greetings-render.pnimedia.com/api/v3/thumb/DM/HY101118COSUS/3/BIZCRD3X2V/600/Back.png?designVariation=Layout1&options=Stock|16ptMatte|0|101|2;"
              alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageScroll;