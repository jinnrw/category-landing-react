import React, { Component } from 'react';
import './BookSlider.scss';

class BookSlider extends Component {
  handleSlider = this.handleSlider.bind(this);
  state = { bgPosition: 0, value: 1, isVideoPlaying: false, isCurrentImage: true };

  handleSlider(e) {
    this.setState({ bgPosition: e.target.value * (-20250 / 45), value: e.target.value });
  }

  componentDidMount() {
    const $ = window;
    // $.$('#book-slider').slick();

    $.$('.slider-for').slick({
      slidesToShow: 1,
      // slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      draggable: false
    });
    $.$('.slider-nav').slick({
      slidesToShow: 4,
      // slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      draggable: false
    });
  }

  currentIamge() {
    const currentState = this.state.isCurrentImage;
    this.setState({ isCurrentImage: !currentState });
  };

  playVideo() {
    this.refs.vidRef.play();
    this.setState({ isVideoPlaying: true });
    console.log('its playing!')
  }

  stopVideo() {
    if (this.state.isVideoPlaying) {
      this.refs.vidRef.pause();
      console.log('it paused!')
      this.setState({ isVideoPlaying: false });
    }
  }

  render() {
    return (
      <div className={`product-info ${this.props.isAdlayout?"isAdLayout" : ''} `}>
        <div id="book-slider">
          <div className="slider-for">
            <img className="slider-image" src="https://www.costcophotocentre.ca/dynamic/en-CA/ProductDetails/Photobooks/ImageSlider/11x8PhotoBook/sliderthumb1" />
            <video id="video" className="slider-image" ref="vidRef" controls controlsList="nodownload noremote foobar">
              <source src="https://www.costcobusinessprinting.com/dynamic/Content/videos/Costco_BusinessPrinting_Intro.mp4" type="video/mp4" />
            </video>
            <div className="container">
              <div id="slider-image-book" className="slider-image" style={{ backgroundPositionY: this.state.bgPosition }}></div>
              <input id="book-slider_controller" type="range" min="1" max="44" value={this.state.value} onChange={this.handleSlider} />
            </div>

            <img className="slider-image" src="https://www.costcophotocentre.ca/dynamic/en-CA/ProductDetails/Photobooks/ImageSlider/11x8PhotoBook/sliderthumb4" />
          </div>

          <div className="slider-nav">
            <img className="slider-image" src="https://www.costcophotocentre.ca/dynamic/en-CA/ProductDetails/Photobooks/ImageSlider/11x8PhotoBook/sliderthumb1" 
            onClick={this.stopVideo.bind(this)} />
            <img id="video-play" className="slider-image" onClick={this.playVideo.bind(this)} src="https://www.costcophotocentre.ca/dynamic/en-CA/ProductDetails/Photobooks/ImageSlider/11x8PhotoBook/sliderthumb2" />
            <img className="slider-image" src="https://www.costcophotocentre.ca/dynamic/en-CA/ProductDetails/Photobooks/ImageSlider/11x8PhotoBook/sliderthumb3" onClick={this.stopVideo.bind(this)} />
            <img className="slider-image" src="https://www.costcophotocentre.ca/dynamic/en-CA/ProductDetails/Photobooks/ImageSlider/11x8PhotoBook/sliderthumb4" onClick={this.stopVideo.bind(this)} />
          </div>
        </div>

        <div className="product-detail">
          <h1 className="title">12 x 12 Premium Layflat</h1>
          <div className="desc">
            <p>The ultimate coffee-table addition, this 12x12 photo book is perfect for capturing life’s big moments.</p>
            <ul>
              <li>Starts at 30 pages</li>
              <li>Maximum 100 pages</li>
              <li>Allows your photo book to ‘lay flat’, not interrupting photos that cross the center fold</li>
              <li>Choose from a variety of themes</li>
              <li>Add your own captions and photos to a selection of professional layouts</li>
              <li>Printed on Fujicolor Crystal Archive Album HD Paper</li>
              <li>Includes a laminated cover for added protection</li>
            </ul>
          </div>
          <div className="product-select">
            <h3>Select Product</h3>
            <ul className="product-lists">
              <a href="" className="product-list isActive">
                <li>
                  <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Photobooks/ProductOptions/12x12PremiumLayflat/thumb" alt="" />
                  <div className="product-list_title">12 x 12 Premium Layflat</div>
                </li>
              </a>
              <a href="" className="product-list">
                <li>
                  <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Photobooks/ProductOptions/11x8Hardcover2-Pack/thumb" alt="" />
                  <div className="product-list_title">11¼ x 8¾ Hardcover</div>
                </li>
              </a>
              <a href="" className="product-list">
                <li>
                  <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Photobooks/ProductOptions/8x8Softcover2-Pack/thumb" alt="" />
                  <div className="product-list_title">8 x 8 Softcover</div>
                </li>
              </a>
            </ul>
            <div className="product-price">
              <div>
                <strong className="price">Starting at $19.99</strong>
                <p>Delivered in 5-7 business days</p>
              </div>
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSlider;