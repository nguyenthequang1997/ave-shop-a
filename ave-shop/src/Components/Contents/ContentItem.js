import React, { Component } from 'react';
import './Content.css';

class ContentItem extends Component {
    render() {
        return (
            <div>
                <div className="content__item">
                    <img src={this.props.imgitem} className="content__item-img"></img>
                    <div className="content__item-img-hover">
                        <div className="content__icon-gr">
                        <div className="btn btn-outline-info fa fa-shopping-cart"></div>
                        <div className="btn btn-outline-success fa fa-eye"></div>
                        <div className="btn btn-outline-danger fa fa-heart"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentItem;