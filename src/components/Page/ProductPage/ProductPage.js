import React, { Component } from 'react';

import footerbanner1 from '../../../images/footerbanner1.png';
import footerbanner2 from '../../../images/footerbanner2.png';
import './ProductPage.scss';
import BookSlider from './BookSlider/BookSlider';

class ProductPage extends Component {

  render() {

    return (
      <div id="product" >
        <BookSlider />

        <ul className="product-additional-details">
          <li>
            <figure>
              <a href="#"><img src={footerbanner1} alt="" /></a>
              <figcaption>Senior Picture Ideas for Graduating Year</figcaption>
              <p>Make you graduating year one of the books! Our <a href="#"><strong>Inspiration Blog</strong></a> has senior picture poses, prop ideas and more.</p>
            </figure>
          </li>
          <li>
            <figure>
              <a href="#"><img src={footerbanner2} alt="" /></a>
              <figcaption>Meaningful Mother’s Day Gift Ideas</figcaption>
              <p>Show Mom some extra love this Mother’s Day with heart-warming photo gift ideas from our <a href="#"><strong>Inspiration Blog</strong></a>.</p>
            </figure>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductPage;