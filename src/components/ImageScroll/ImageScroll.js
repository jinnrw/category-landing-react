import React, { Component } from 'react';
import './ImageScroll.scss';

class ImageScroll extends Component {
  componentDidMount(){
    this.scrollEvent();
  }

  scrollEvent(){
    
    
    var controller = new window.ScrollMagic.Controller({
      globalSceneOptions: { // options for every scene
        triggerHook: 0.15
      },
    });	
    var tweenSceneEnter = new window.TimelineMax({});
    tweenSceneEnter.fromTo("#mask", 0.5, {scale: 1},
                                        {scale: 2});
    tweenSceneEnter.to("#background", 0.5, {scale: 2}, 0);

    var tweenSceneLeave = new window.TimelineMax({});
    tweenSceneLeave.to("#mask", 0.5, {scale: 3.5});
    tweenSceneLeave.to("#background", 0.5, {scale: 1}, 0.1);

    

    // Scene On Enter
    new window.ScrollMagic.Scene({triggerElement: "#scene", duration: 300})
        .offset(-10)
        .setPin('#scene')
        .setTween(tweenSceneEnter)
        // .addIndicators({name: "onEnter"}) // add indicators (requires plugin)
        .addTo(controller)

    // Background onLeave
    new window.ScrollMagic.Scene({triggerElement: "#scene", duration: 300, offset: 290})
        .setPin('#scene')
        .setTween(tweenSceneLeave)
        // .addIndicators({name: "onLeave"}) // add indicators (requires plugin)
        .addTo(controller)

        
  }

  render() {
    return(
      <div className="image-scroll">

        <div id="scene">
          <div>
            <h1>Business Cards</h1>
            <p>Full color, double-sided printing on premium 16 pt card stock</p>
          </div>
          <div id="background">
            <img 
            src="https://cosus-greetings-render.pnimedia.com/api/v3/thumb/DM/HY101118COSUS/3/BIZCRD3X2V/600/Back.png?designVariation=Layout1&options=Stock|16ptMatte|0|101|2;"
            alt="" />
          </div>
          <svg id="mask"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 90">
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html: ".cls-1{fill:none;}.cls-2{fill:#fff;}"
                }}
              />
            </defs>
            <title>Untitled-1</title>
            <polygon
              className="cls-1" points="69.03 26.01 58.07 45 69.03 63.99 90.97 63.99 101.93 45 90.97 26.01 69.03 26.01"/>
            <path className="cls-2" d="M0,0V90H160V0ZM91,64H69l-11-19L69,26H91l11,19Z"/>
          </svg>
        </div>
      </div>
    );
  }
}

export default ImageScroll;