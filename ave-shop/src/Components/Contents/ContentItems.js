import React, { Component } from 'react';
import ContentItem from './ContentItem';
import './Content.css';

class ContentItems extends Component {
    render() {
        return (
            <div>
                
                    <div className="container content__items">
                        <div className="content__item-1">
                        <ContentItem imgitem="./image/item1.png"></ContentItem>
                        </div>
                        <div className="content__item-2">
                        <ContentItem imgitem="./image/item2.png"></ContentItem>
                        </div>
                        <div className="content__item-3">
                        <ContentItem imgitem="./image/item3.png"></ContentItem>
                        </div>
                        <div className="content__item-4">
                        <ContentItem imgitem="./image/item4.png"></ContentItem>
                        </div>
                        <div className="content__item-5">
                        <ContentItem imgitem="./image/item2.png"></ContentItem>
                        </div>
                        <div className="content__item-6">
                        <ContentItem imgitem="./image/item6.png"></ContentItem>
                        </div>
                                
                               
                            
                        </div>
                    </div>
                
           
        );
    }
}

export default ContentItems;