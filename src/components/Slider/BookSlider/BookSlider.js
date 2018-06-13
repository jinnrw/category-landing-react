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
      <div id="book-slider" >
        <div>
          <div>
            <h1 className="title">Business Cards</h1>
            <p className="desc">Full color, double-sided printing on premium 16 pt card stock</p>
          </div>
          <div className="container">
            <div id="slider-image-book" className="container" style={{ backgroundPositionY: this.state.bgPosition }}></div>
          </div>
          <input id="book-slider_controller" type="range" min="1" max="44" value={this.state.value} onChange={this.handleSlider} />
        </div>
      </div>
    );
  }
}

export default BookSlider;