import React, { Component } from 'react';
import './Slider.scss';
import CardSlider from './CardSlider/CardSlider'
import BookSlider from './BookSlider/BookSlider'

class Slider extends Component {
  handleChange = this.handleChange.bind(this);
  state = { showCard: true };

  handleChange(e) {
    var isShowCard = (e.target.value === "true");
    this.setState({ showCard: isShowCard });
  }

  render() {
    const isShowCard = this.state.showCard;
    return (
      <div id="slider">
        {/* {isShowCard ? (<CardSlider />): (<BookSlider />)} */}
        <CardSlider />
        <BookSlider />

        {/* <button onClick={this.handleChange} value="true" >Card</button>
        <button onClick={this.handleChange} value="false" >Book</button> */}
      </div>
    );
  }
}

export default Slider;