import React, { Component } from 'react';

class MarketingList extends Component {
  render() {
    return(
      <li className="marketing-list">
        <img />
        <h2>{ this.props.title }</h2>  
      </li>
    );
  }
}

export default MarketingList;