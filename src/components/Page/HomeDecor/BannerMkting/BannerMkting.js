import React, { Component } from 'react';

class BannerMkting extends Component {
  render() {

    return (
      <div className="banner-mkting">
        <div className="content">
          <div className="copy">
            <h3>Get art pieces easily</h3>
          </div>
          <div className="tiles">
            <div>
              <div className="image"><img src="https://www.costcobusinessprinting.com/dynamic/Content/images/RetailerSpecific/COSUS/quality.png?v=955df89c141024c6&webp=1" alt="" /></div>
              <div className="copy">
                <h4>See it</h4>
                <p>Premium product quality, professional finish and designer styles</p>
              </div>
            </div>
            <div>
              <div className="image"><img src="https://www.costcobusinessprinting.com/dynamic/Content/images/RetailerSpecific/COSUS/delivery.png?v=e5127d6da363c1eb&webp=1" alt="" /></div>
              <div className="copy">
                <h4>Love it</h4>
                <p>All projects are saved to your account, so it’s easy to update your projects for new team members.</p>
              </div>
            </div>
            <div>
              <div className="image"><img src="https://www.costcobusinessprinting.com/dynamic/Content/images/RetailerSpecific/COSUS/value.png?v=d9e40b46b4249c61&webp=1" alt="" /></div>
              <div className="copy">
                <h4>Buy it</h4>
                <p>This is a partnership you can count on. Satisfaction guaranteed or we’ll replace or refund your order.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerMkting;