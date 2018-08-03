import React, { Component } from 'react';

import './HomeDecor.scss';
import ShopByProducts from './ShopByProducts/ShopByProducts';
import BannerBehind from './BannerBehind/BannerBehind';
import BannerMkting from './BannerMkting/BannerMkting';

class HomeDecor extends Component {
    render() {
        return (
            <div className="home-decor">
                <main>
                    <div className="page-header">
                        <h1>Art Shop</h1>
                    </div>

                    {/* Artisan Collection tiles */}
                    <div className="collection">
                        <div className="container">
                            <div className="banner">
                                <h2>Artisan Collection</h2>
                                <p>The most exclusive and high quality products only for you</p>
                            </div>
                            <ul className="tiles">
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Green armony</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Watercolors</div>
                                    <div className="product">Metal Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Metal Print</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Happy forever</div>
                                    <div className="product">Acrylic Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Acrylic Print</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Forest</div>
                                    <div className="product">Photo Mug</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Customize Now</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <BannerMkting />

                    {/* Featured tiles */}
                    <div className="featured">
                        <div className="container">
                            <h2>Feature Canvas Designs</h2>

                            <ul className="tiles">
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Green armony</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Green armony</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Happy forever</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Customize Now</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ShopByProducts />
                    <BannerBehind />

                    {/* Top Sellers tiles */}
                    <div className="top-sellers">
                        <div class="container">
                            <h2>Top Sellers: Art &amp; Image Galler</h2>

                            <ul className="tiles">
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Seasons greetings</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Happy trees</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Metal Print</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Warm wishes</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Acrylic Print</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Winter cabins</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Customize Now</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Seasons greetings</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Happy trees</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Metal Print</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Warm wishes</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Acrylic Print</a>
                                </li>
                                <li>
                                    <img src="http://placehold.it/250x250" alt="" />
                                    <div className="title">Winter cabins</div>
                                    <div className="product">Canvas Print</div>
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