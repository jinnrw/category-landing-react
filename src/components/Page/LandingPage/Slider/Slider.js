import React, { Component } from 'react';
import './Slider.scss';
import CardSlider from './CardSlider/CardSlider'

class Slider extends Component {
  render() {
    return (
      <div id="slider">
        <CardSlider />
      </div>
    );
  }
}

export default Slider;