import React, { Component } from 'react';
import './Content.css';
import ContentSort from './ContentSort';
class ContentLookbook extends Component {        
      render() {
        const items = [
          { id: 1, name: "Sweater Black",  price: "$2", imgitem :"image/item1.png" },
          {  id: 2, name: "T-shirt White",  price: "$3", imgitem :"./image/item2.png" },
          {  id: 3, name: "Sweater Black",  price: "$4", imgitem :"./image/item3.png" },
          {  id: 4, name: "Sweater Blue",  price: "$5", imgitem :"./image/item4.png" },
          {  id: 5, name: "T-shirt Orange",  price: "$1", imgitem :"./image/item5.png" },
          {  id: 6, name: "T-shirt Black",  price: "$9", imgitem :"./image/item6.png" },
          { id: 7, name: "Sweater Black",  price: "$2", imgitem :"image/item1.png" },
          {  id: 8, name: "T-shirt White",  price: "$3", imgitem :"./image/item2.png" },
          {  id: 9, name: "Sweater Black",  price: "$4", imgitem :"./image/item3.png" },
          {  id: 10, name: "Sweater Blue",  price: "$5", imgitem :"./image/item4.png" }  ]

         
          
          return (
            <div >
                <ContentSort></ContentSort>

              <div className="content__items-2 container">
              {items.map(item => (
                
                <div className="content__item-2nd">
                    <img src={item.imgitem} className="content__item-img"></img>
                    <div className="content__item-img-hover">
                      <span>{item.name}</span><br/><span>{item.price}</span>
                        <div className="content__icon-gr">
                        <div className="btn btn-outline-info fa fa-shopping-cart"></div>
                        <div className="btn btn-outline-success fa fa-eye"></div>
                        <div className="btn btn-outline-danger fa fa-heart"></div>
                        </div>
                        
                    </div>
                </div>
              ))}
            </div></div>
            
          );
        }
      }
    
export default ContentLookbook;