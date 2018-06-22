import React, { Component } from 'react';
import './BookSlider.scss';

class BookSlider extends Component {
  handleSlider = this.handleSlider.bind(this);
  state = { bgPosition: 0, value: 1 };

  handleSlider(e) {
    this.setState({ bgPosition: e.target.value * (-20250 / 45), value: e.target.value });
  }

  render() {
    const isActive = this.props.isActive;

    return (
      <div className="product-info">
        <div id="book-slider">
          <div className="container">
            <div id="slider-image-book" style={{ backgroundPositionY: this.state.bgPosition }}></div>
          </div>
          <input id="book-slider_controller" type="range" min="1" max="44" value={this.state.value} onChange={this.handleSlider} />
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
          <div class="product-select">
            <h3>Select Product</h3>
            <ul className="product-lists">
              <a href="#" className="product-list isActive">
                <li>
                  <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Photobooks/ProductOptions/12x12PremiumLayflat/thumb" alt="" />
                  <div className="product-list_title">12 x 12 Premium Layflat</div>
                </li>
              </a>
              <a href="#" className="product-list">
                <li>
                  <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Photobooks/ProductOptions/11x8Hardcover2-Pack/thumb" alt="" />
                  <div className="product-list_title">11¼ x 8¾ Hardcover</div>
                </li>
              </a>
              <a href="#" className="product-list">
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