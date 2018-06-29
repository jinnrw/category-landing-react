import React from 'react';
import ReactDOM from 'react-dom';
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import './index.scss';
import App from './components/Layout/Layout';
import ProductPage from './components/Page/ProductPage/ProductPage';
import LandingPage from './components/Page/LandingPage/LandingPage'

const home = () => (
  <App><LandingPage landing="imageScroll" /></App>
)

const slider = () => (
  <App><LandingPage landing="slider" /></App>
)

// const reload = () => window.location.reload();

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/card-slider" component={slider} />
      <Route exact path="/banner" render={() =>
        <App><LandingPage landing="BannerScroll" /></App>} />
      <Route exact path="/hotspot" render={() =>
        <App><LandingPage landing="HotSpot" /></App>} />
      <Route exact path="/product" render={() =>
        <App><ProductPage /></App>} />
    </Switch>
  </Router>,
  document.getElementById('root'));
