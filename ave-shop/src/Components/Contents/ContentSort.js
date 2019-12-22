import React, { Component } from 'react';
import './Content.css';

class ContentSort extends Component {
    render() {
        return (
            <div>
                 <div className="content__sort">
  <ul>
    <li><a href="#">POPULAR</a></li>
    <li><a href="#">NEW ARRIVALS</a></li>
    <li><a href="#">BEST SELLERS</a></li>
    <li><a href="#">SPECIAL OFFERS</a></li>
    <li><a href="#">COMING SOON</a></li>
  </ul>
</div>

            </div>
        );
    }
}

export default ContentSort;