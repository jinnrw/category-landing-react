import React, { Component } from 'react';

class MarketingList extends Component {
  render() {
    return(
      <li className="marketing-list">
        <figure>
          <img src="http://placehold.it/300x200" alt="" />
          <figcaption>{ this.props.title }</figcaption>  
        </figure>
      </li>
    );
  }
}

export default MarketingList;