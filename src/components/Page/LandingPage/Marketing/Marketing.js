import React, { Component } from 'react';
import './Marketing.scss';
import MarketingList from './MarketingList/MarketingList';

class Marketing extends Component {
  render() {
    return(
      <div id="marketing-workflow">
        <h1>Choose One of the Following</h1>
        <ul className="marketing-lists">
          <MarketingList title="Browse Designs"/>
          <MarketingList title="Upload Your Design"/>
          <MarketingList title="Create Your Own"/>
        </ul>
      </div>
    );
  }
}

export default Marketing;