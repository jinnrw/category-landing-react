import React, { Component } from 'react';

import './HomeDecor.scss';

class HomeDecor extends Component {
    render() {
        return (
            <div className="home-decor">
                <main>
                    <div className="page-header">
                        <h1>Art Shop</h1>
                    </div>

                    <div className="collection">
                        <div class="container">
                            <div className="banner">
                                <h2>Artisan Collection</h2>
                                <p>The most exclusive and high quality products only for you</p>
                            </div>
                            <ul class="tiles">
                                <li>
                                    <img src="http://placehold.it/400x400" alt="" />
                                    <div className="title">Green armony</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/400x400" alt="" />
                                    <div className="title">Watercolors</div>
                                    <div className="product">Metal Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Metal Print</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/400x400" alt="" />
                                    <div className="title">Happy forever</div>
                                    <div className="product">Acrylic Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Acrylic Print</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/400x400" alt="" />
                                    <div className="title">Forest</div>
                                    <div className="product">Photo Mug</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Customize Now</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </main>
            </div>
        );
    }
}

export default HomeDecor;