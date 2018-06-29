import React, { Component } from 'react';
import './ImageAutoplay.scss';

class ImageAutoplay extends Component {
  state = { bgPosition: 0, intervalID: '' };

  componentDidMount() {
    var imageAutoplay = this.imageAutoplay;
    imageAutoplay(); // Init on page load

    this.setState({
      intervalID: setInterval(function () {
        imageAutoplay();
      }, 10000)
    })


    // console.log(this.state.intervalID)
    // ClearInterval when onblur
    window.onblur = () => {
      clearInterval(this.state.intervalID);
      console.log("Clear " + this.state.intervalID)
    }
    window.onfocus = () => {
      this.setState({
        intervalID: setInterval(function () {
          imageAutoplay();
        }, 10000)
      })
      console.log("Start " + this.state.intervalID)
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
    console.log("Clear " + this.state.intervalID)
  }

  imageAutoplay() {
    var value = 0;
    var imageCountdown = setInterval(function () {
      // console.log(value)
      value++;
      // this.setState({ bgPosition: value * (-74250 / 165) });

      window.$('.slider-image').css('background-position-y', value * (-74250 / 165))
      if (value >= 164) {
        clearInterval(imageCountdown);
      }
    }, 17);


  }

  render() {
    return (
      <div className="image-autoplay">
        <div className="container">
          <div className="slider-image"></div>

          <div className="hotspot hs1">
            <div className="dot-ref">
              <div className="dot"></div>
            </div>
            <div className="hotspot-modal">
              <figure>
                <img src="http://placehold.it/75x75" alt="" />
                <div className="details">
                  <figcaption>Photo Books</figcaption>
                  <a href="">Shop</a>
                </div>
              </figure>
            </div>
          </div>

          <div className="hotspot hs2">
            <div className="dot-ref">
              <div className="dot"></div>
            </div>
            <div className="hotspot-modal">
              <figure>
                <img src="http://placehold.it/75x75" alt="" />
                <div className="details">
                  <figcaption>Photo Mugs</figcaption>
                  <a href="">Shop</a>
                </div>
              </figure>
            </div>
          </div>

        </div>
        <div className="desc">
          <h3 className="title">Photobooks for Every Occasion</h3>
          <p className="content">The Costco Photo Center allows you to create a personalized photo book in the style and theme that appeal to you.</p>
          <p className="content">Your selected photos can be automatically added to your book – simply change the order, add text, and your book is done. You can also manually add photos to each page by going to the builder without selecting photos ahead of time.</p>
          <p className="content">The available editing options allow you to resize and reposition photos or text boxes. When customizing text, you can also choose the font, size, alignment and color</p>
        </div>
      </div >
    );
  }
}

export default ImageAutoplay;