import React from 'react';
import ReactDOM from 'react-dom';
// import { hydrate, render } from "react-dom";

// import { render } from 'react-snapshot'

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
import LandingPage from './components/Page/LandingPage/LandingPage';
import HomeDecor from './components/Page/HomeDecor/HomeDecor';

const home = () => (
  <App><LandingPage landing="imageScroll" /></App>
)
const slider = () => (
  <App><LandingPage landing="slider" /></App>
)

const homedecor = () => (
  <App><HomeDecor landing="homedecor" /></App>
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
        <App><ProductPage productPage="BookSlider"/></App>} />
      <Route exact path="/adlayout" render={() =>
        <App><ProductPage productPage="AdLayout"/></App>} />
      <Route exact path="/homedecor" component={homedecor} />
    </Switch>
  </Router>,
  document.getElementById('root'));

// <Router history={browserHistory}>
//   <Route path="/" component={App}>
//     <IndexRoute component={Index} />
//     <Route path="/login" component={Login} />
//     <Route path="/about" component={About} />
//     <Route path="/admin" component={Admin} />
//     <Route path="*" component={FourOhFour} />
//   </Route>
// </Router>



// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   // hydrate(<App />, rootElement);
//   hydrate(
//     <App />, rootElement)
// } else {
//   render(
//     <App />, rootElement);
// }
