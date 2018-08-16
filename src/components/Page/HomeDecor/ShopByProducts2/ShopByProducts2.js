import React, { Component } from 'react';
import hotspotbkg from '../ShopByProducts2/ShopByProduct.png';

class ShopByProducts2 extends Component {
  render() {

    return (
      <div className="shop-by-products2">
        <ul>
          <li>
            <h2 className="title">Shop By Products</h2>
            <p>Have a look through our exclusive variety of products.</p>
            <p><strong>Select one of products in the image</strong></p>
          </li>
          <li>
            <div className="shop-hotspots">
            <div className="background"><img src={hotspotbkg} alt="" /></div>
              <div className="hotspot hs1">
                  <div className="dot-ref">
                      <div className="dot"></div>
                  </div>
                  <div className="hotspot-modal">
                          <div className="details">
                              <span>Framed prints</span>
                              <a href="">View more</a>
                          </div>
                  </div>
              </div>
              <div className="hotspot hs2">
                  <div className="dot-ref">
                      <div className="dot"></div>
                  </div>
                  <div className="hotspot-modal">
                          <div className="details">
                              <span>Photo mugs</span>
                              <a href="">View more</a>
                          </div>
                  </div>
              </div>
              <div className="hotspot hs3">
                  <div className="dot-ref">
                      <div className="dot"></div>
                  </div>
                  <div className="hotspot-modal">
                          <div className="details">
                              <span>Canvas prints</span>
                              <a href="">View more</a>
                          </div>
                  </div>
              </div>
              <div className="hotspot hs4">
                  <div className="dot-ref">
                      <div className="dot"></div>
                  </div>
                  <div className="hotspot-modal">
                          <div className="details">
                              <span>Acrylic prints</span>
                              <a href="">View more</a>
                          </div>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ShopByProducts2;
