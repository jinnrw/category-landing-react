import React, { Component } from 'react';

class MarketingList extends Component {
  render() {
    return(
      <div className="marketing-list">
        <img alt=""/>
        <h1>{ this.props.title }</h1>  
      </div>
    );
  }
}

export default MarketingList;