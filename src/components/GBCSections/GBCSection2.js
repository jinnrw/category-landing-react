import React, { Component } from 'react';
import gbcsection3banner from '../../images/babybanner_siteB.png';
import './GBCSections.scss';

class GBCSection2 extends Component {
    render() {
        return(
            <div className="gbc-section-2">
                <img className="banner" src={gbcsection3banner} alt="" />
                <div className="content">
                    <div className="copy">
                        <h3>Baby Cards for Your Bundle of Joy</h3>
                        <p>Little ones deserve lots of love. Create custom cards to cradle every moment from baby bump to year one!</p>
                        <p>Explore baby shower invitations that hint at a range of cute party themes. Share the news of baby's arrival with custom baby announcements, personalized with an adorable photo and the mini measurements. And as your boy or girl grows, host a sweet celebration with baby’s 1st birthday invitations that guests will cherish.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GBCSection2;