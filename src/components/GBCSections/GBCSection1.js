import React, { Component } from 'react';
import topbanner from '../../images/hero_siteB.png';
import productbadge1 from '../../images/badgeleft_siteB.png';
import productbadge2 from '../../images/badgeright_siteB.png';
import './GBCSections.scss';

class GBCSection1 extends Component {
    render() {
        return(
            <div>
                <div className="gift-banner">
                    <div className="hero-banner-copy">
                        <h2>Custom Greeting Cards for Every Occasion</h2>
                        <p>Celebrate life's special moments — design and order custom greeting cards online. Explore our collection of card designs and easily personalize your favorite with custom text and your best photos. Greeting cards can be shipped to your home or picked up from a Costco warehouse near you.</p>
                    </div>
                    <img src={topbanner} alt="" />
                </div>
                <div className="product-tiles">
                    <ul className="products">
                        <li className="item">
                            <div className="tile-img"><img src={productbadge1} alt="" /></div>
                            <div className="tile-title">
                                <h3>5x7 Premium Stationery Greeting Cards</h3>
                                <span>$17.25 per set of 25</span>
                            </div>
                            <div className="tile-copy">
                                <p>Delivered in 5-7 business days</p>
                                <a href="/greetings">Shop Premium Cards</a>
                                <p>Recipients will cherish these beautiful card designs, printed on premium 120 lb thick card stock. Browse through our collection of high-quality greeting cards—available in flat, folded or postcard styles.</p>
                                <ul>
                                    <li>Double-sided printing (select designs)</li>
                                    <li>Choose square or rounded corners</li>
                                    <li>Envelopes with return address included</li>
                                </ul>
                            </div>
                        </li>
                        <li className="item">
                            <div className="tile-img"><img src={productbadge2} alt="" /></div>
                            <div className="tile-title">
                                <h3>6x7½ Photo Greeting Cards</h3>
                                <span>$14.99 per set of 50</span>
                            </div>
                            <div className="tile-copy">
                                <p>Ready next day at selected locations or delivered in 5—7 business days</p>
                                <a href="/greetings">Shop Photo Cards</a>
                                <p>Photo cards are printed on high-quality archival photographic paper. Explore our wide range of single-sided card designs, which can be easily customized with your photos and personal message.</p>
                                <ul>
                                    <li>Includes 4 calendar cards</li>
                                    <li>Envelopes included</li>
                                    <li>$5.49 per additional set of 25</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GBCSection1;