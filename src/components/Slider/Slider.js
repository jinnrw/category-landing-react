import React, { Component } from 'react';
import './Slider.scss';
import CardSlider from './CardSlider/CardSlider'
import BookSlider from './BookSlider/BookSlider'

class Slider extends Component {
  handleChange = this.handleChange.bind(this);
  state = { showCard: true, slider: "" };

  componentDidMount(){
    this.setState({slider: this.sliderSwapper() })
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState(prevState => ({
      showCard: !prevState.showCard
    }));
  }

  sliderSwapper() {
    if (this.state.showCard) {
      return <CardSlider />
    } else {
      return <BookSlider />
    }
  }

  render() {
    return (
      <div id="slider">
      {this.state.slider}
        <div>
          <button onClick={this.handleChange}>{this.state.showCard}</button>
        </div>
      </div>
    );
  }
}

export default Slider;

          // <input type="radio" id="slider1" value="true" onChange={this.handleChange} checked={this.state.showCard} />
          // <label htmlFor="slider1">Card</label>

          // <input type="radio" id="slider2" value="false" onChange={this.handleChange} checked={!this.state.showCard}/>
          // <label htmlFor="slider2">Book</label>

          //           this.state.showCard ? 
          // (<CardSlider />):
          // (<BookSlider />)