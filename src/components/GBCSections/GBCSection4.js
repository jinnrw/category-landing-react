import React, { Component } from 'react';
import section4tile1 from '../../images/section-4-tile-1_siteB.png';
import section4tile2 from '../../images/section-4-tile-2_siteB.png';
import section4tile3 from '../../images/section-4-tile-3_siteB.png';
import './GBCSections.scss';

class GBCSection4 extends Component {
    render() {
        return(
            <div className="gbc-section-4">
                <div className="content">
                    <h3>Celebrate the Milestones and Moments In Between</h3>
                    <div className="tiles">
                        <div className="tile">
                            <div className="image"><img src={section4tile1} alt="" /></div>
                            <div className="copy">
                                <h4>Bridal Invitations</h4>
                                <p>Find the perfect birthday invitation for your party theme. Customize with the event details and a photo of the guest of honor.</p>
                                <ul>
                                    <li>Kids &amp; Teen Birthday Invites</li>
                                    <li>Milestone Birthday Cards</li>
                                    <li>Surprise Party Invitations</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tile">
                            <div className="image"><img src={section4tile2} alt="" /></div>
                            <div className="copy">
                                <h4>Graduation Cards</h4>
                                <p>Welcome a new chapter with more than a cap and gown. Create custom graduation cards to celebrate the milestone.</p>
                                <ul>
                                    <li>Graduation Announcement Cards</li>
                                    <li>Graduation Party Invitations</li>
                                    <li>Graduation Thank You Cards</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tile">
                            <div className="image"><img src={section4tile3} alt="" /></div>
                            <div className="copy">
                                <h4>Wedding Stationery</h4>
                                <p>Celebrate every step of your wedding in style with custom cards. Find the design that’s a perfect match for your theme.</p>
                                <ul>
                                    <li>Bridal Shower Invitations</li>
                                    <li>Save the Dates</li>
                                    <li>Wedding Invitations and more</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        <a href="#gbc-top">Let's Get Started</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GBCSection4;