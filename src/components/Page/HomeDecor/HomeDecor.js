import React, { Component } from 'react';

import './HomeDecor.scss';
import ShopByProducts2 from './ShopByProducts2/ShopByProducts2';
import BannerBehind from './BannerBehind/BannerBehind';
import BannerMkting from './BannerMkting/BannerMkting';

class HomeDecor extends Component {
    componentDidMount() {
        this.scrollEvent();
    }

    scrollEvent() {
        // init controller
        var controller = new window.ScrollMagic.Controller();

        // Art Collection
        var artCollection = function () {
            var timeline = new window.TimelineMax({});
            timeline.staggerFromTo(".home-decor .collection .tiles li", 0.8, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, 0.2, 0);
        }
        var scene1 = new window.ScrollMagic.Scene({
            triggerElement: ".home-decor .collection",
            triggerHook: 'onEnter',
            offset: 200,
            reverse: false
        })
        .setTween(artCollection)
        .addTo(controller);

        // Featured Products
        var featureProducts = function () {
            var timeline = new window.TimelineMax({});
            timeline.staggerFromTo(".home-decor .featured .tiles li", 0.8, { opacity: 0 }, { opacity: 1 }, 0.2, 0);
        }
        var scene2 = new window.ScrollMagic.Scene({
            triggerElement: ".home-decor .featured",
            triggerHook: 'onEnter',
            offset: 200,
            reverse: false
        })
        .setTween(featureProducts)
        .addTo(controller);

        // Shop By Products
        var shopBy = function () {
            var timeline = new window.TimelineMax({});
            timeline.staggerFromTo(".home-decor .shop-by-products2 li", 0.8, { opacity: 0 }, { opacity: 1 }, 0.2, 0);
        }
        var scene3 = new window.ScrollMagic.Scene({
            triggerElement: ".home-decor .shop-by-products2",
            triggerHook: 'onEnter',
            offset: 200,
            reverse: false
        })
        .setTween(shopBy)
        .addTo(controller);

        // Top Sellers
        var topSellers = function () {
            var timeline = new window.TimelineMax({});
            timeline.staggerFromTo(".home-decor .top-sellers .tiles li", 0.8, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, 0.2, 0);
        }
        var scene4 = new window.ScrollMagic.Scene({
            triggerElement: ".home-decor .top-sellers",
            triggerHook: 'onEnter',
            offset: 200,
            reverse: false
        })
        .setTween(topSellers)
        .addTo(controller);
    }

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
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Art/ProductOptions/ArtCanvas/thumb" alt="" />
                                    <div className="title">Green armony</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Art/ProductOptions/MetalPrints/thumb" alt="" />
                                    <div className="title">Watercolors</div>
                                    <div className="product">Metal Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Metal Print</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Art/ProductOptions/GalleryAcrylicPrints/thumb" alt="" />
                                    <div className="title">Happy forever</div>
                                    <div className="product">Acrylic Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Acrylic Print</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Mugs/ProductOptions/15ozColoredMug/thumb" alt="" />
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
                    <div className="featured" id="scene2">
                        <div className="container">
                            <h2>Feature Canvas Designs</h2>

                            <ul className="tiles">
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Posters/ProductOptions/PosterBoards/thumb" alt="" />
                                    <div className="title">Green armony</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Art/ProductOptions/ArtMulti/thumb" alt="" />
                                    <div className="title">Green armony</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/Art/ProductOptions/ArtPrints/thumb" alt="" />
                                    <div className="title">Happy forever</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Customize Now</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ShopByProducts2 />
                    <BannerBehind />

                    {/* Top Sellers tiles */}
                    <div className="top-sellers" id="scene3">
                        <div class="container">
                            <h2>Top Sellers: Art &amp; Image Galler</h2>

                            <ul className="tiles">
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/AcrylicPrints/ProductOptions/AcrylicWallArt/thumb" alt="" />
                                    <div className="title">Seasons greetings</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/AcrylicPrints/ProductOptions/AcrylicWallArt/thumb" alt="" />
                                    <div className="title">Happy trees</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Metal Print</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/AcrylicPrints/ProductOptions/AcrylicWallArt/thumb" alt="" />
                                    <div className="title">Warm wishes</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Acrylic Print</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/AcrylicPrints/ProductOptions/AcrylicWallArt/thumb" alt="" />
                                    <div className="title">Winter cabins</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Customize Now</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/AcrylicPrints/ProductOptions/AcrylicWallArt/thumb" alt="" />
                                    <div className="title">Seasons greetings</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Canvas</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/AcrylicPrints/ProductOptions/AcrylicWallArt/thumb" alt="" />
                                    <div className="title">Happy trees</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Metal Print</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/AcrylicPrints/ProductOptions/AcrylicWallArt/thumb" alt="" />
                                    <div className="title">Warm wishes</div>
                                    <div className="product">Canvas Print</div>
                                    <div className="price">Starting at $xx.xx</div>
                                    <a className="cta" href="#">Buy Acrylic Print</a>
                                </li>
                                <li>
                                    <img src="https://www.costcophotocenter.com/assets/en-US/ProductDetails/AcrylicPrints/ProductOptions/AcrylicWallArt/thumb" alt="" />
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