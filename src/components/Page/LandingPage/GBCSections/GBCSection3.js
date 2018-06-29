import React, { Component } from 'react';
import section3icon1 from '../../../../images/icon-tile-1_siteB.png';
import section3icon2 from '../../../../images/icon-tile-2_siteB.png';
import section3icon3 from '../../../../images/icon-tile-3_siteB.png';
import section3icon4 from '../../../../images/icon-tile-4_siteB.png';
import './GBCSections.scss';

class GBCSection3 extends Component {
    render() {
        return(
            <div className="gbc-section-3">
                <div className="content">
                    <div className="copy">
                        <h3>Ordering Cards is as Simple as Opening Them</h3>
                        <p>Create custom cards for any occasion in just a few clicks. Easily add your best photos and personal message to your favorite card design to create one-of-a-kind cards your friends and family will love. Professionally printed in the USA, beautiful custom cards are within reach—at a great value.</p>
                    </div>
                    <div className="tiles">
                        <div>
                            <div className="image"><img src={section3icon1} alt="" /></div>
                            <div className="copy">
                                <h4>Beautiful card designs</h4>
                                <p>Hundreds of card designs available.</p>
                            </div>
                        </div>
                        <div>
                            <div className="image"><img src={section3icon2} alt="" /></div>
                            <div className="copy">
                                <h4>Quality paper and card stock</h4>
                                <p>Choose premium 120 lb card stock or archival-quality photo paper.</p>
                            </div>
                        </div>
                        <div>
                            <div className="image"><img src={section3icon3} alt="" /></div>
                            <div className="copy">
                                <h4>Easy to customize</h4>
                                <p>Upload and edit your photos. Choose a font style, size and color.</p>
                            </div>
                        </div>
                        <div>
                            <div className="image"><img src={section3icon4} alt="" /></div>
                            <div className="copy">
                                <h4>Professional printing</h4>
                                <p>High-quality, digital printing you can count on.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GBCSection3;