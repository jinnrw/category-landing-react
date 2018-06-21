import React, { Component } from 'react';
import './ProductPage.scss';
import BookSlider from './BookSlider/BookSlider';

class ProductPage extends Component {

  render() {

    return (
      <div id="product" >
        <BookSlider />
      </div>
    );
  }
}

export default ProductPage;