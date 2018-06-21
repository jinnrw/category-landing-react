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

ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path="/" render={()=> <App><LandingPage landing="imageScroll" /></App>} />
        <Route path="/card-slider" render={()=> <App><LandingPage landing="slider" /></App>} />
        <Route path="/product" render={()=> <App><ProductPage /></App>}  />
      </Switch>
  </Router>,
  document.getElementById('root'));
