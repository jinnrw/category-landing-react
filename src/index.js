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
import ImageScroll from './components/ImageScroll/ImageScroll';
import Slider from './components/Slider/Slider';

ReactDOM.render(
  <Router>
    {/* <Route path="/" component={Layout}>
      <Route path="image-scroll" component={ImageScroll} />
      <Route path="slider" component={Slider} />
    </Route> */}
    <App>
      <Switch>
        <Route exact path="/" component={ImageScroll} />
        <Route path="/slider" component={Slider} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'));
