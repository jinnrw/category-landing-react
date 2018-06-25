import React, { Component } from 'react';
import hotspotbanner from '../../../../images/hotspot-banner.jpg';
import './HotSpot.scss';

class HotSpot extends Component {
    render() {
        return(
            <div className="banner-hotspots">
                <div className="container">
                    <a className="background" href="/Shop"><img src={hotspotbanner} alt="" /></a>
                    <div className="hotspot hs1">
                        <div className="dot-ref">
                            <div className="dot"></div>
                        </div>
                        <div className="hotspot-modal">
                            <figure>
                                <img src="http://placehold.it/75x75" alt="" />
                                <div className="details">
                                    <figcaption>Tri-fold Brochures</figcaption>
                                    <a href="#">Shop Brochures</a>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="hotspot hs2">
                        <div className="dot-ref">
                            <div className="dot"></div>
                        </div>
                        <div className="hotspot-modal">
                            <figure>
                                <img src="http://placehold.it/75x75" alt="" />
                                <div className="details">
                                    <figcaption>Brochures</figcaption>
                                    <a href="#">Shop Brochures</a>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="hotspot hs3">
                        <div className="dot-ref">
                            <div className="dot"></div>
                        </div>
                        <div className="hotspot-modal">
                            <figure>
                                <img src="http://placehold.it/75x75" alt="" />
                                <div className="details">
                                    <figcaption>Banners</figcaption>
                                    <a href="#">Shop Banners</a>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="hotspot hs4">
                        <div className="dot-ref">
                            <div className="dot"></div>
                        </div>
                        <div className="hotspot-modal">
                            <figure>
                                <img src="http://placehold.it/75x75" alt="" />
                                <div className="details">
                                    <figcaption>Business Cards</figcaption>
                                    <a href="#">Shop Cards</a>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="hotspot hs5">
                        <div className="dot-ref">
                            <div className="dot"></div>
                        </div>
                        <div className="hotspot-modal">
                            <figure>
                                <img src="http://placehold.it/75x75" alt="" />
                                <div className="details">
                                    <figcaption>Greeting Cards</figcaption>
                                    <a href="#">Shop Greeting Cards</a>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HotSpot;