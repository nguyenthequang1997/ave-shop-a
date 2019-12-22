import React, { Component } from 'react';
import './Content.css';

class ContentThebrand extends Component {
    render() {
        return (
            <div>
                 <div className="content__thebrand">
                    <div className="content__thebrand-1">
                        <img src="../image/intro1.png" 
                        className="content__thebrand-img-1"/>
                        <p className="content__thebrand-text-1">
                            Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Aliquam
                         illum, praesentium quasi provident 
                         necessitatibus sapiente temporibus cupiditate.
                         </p></div>
                 <div className="content__thebrand-2">
                     <img src="../image/intro2.png" 
                     className="content__thebrand-img-2"/>
                     <p className="content__thebrand-text-2">
                         Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Aliquam
                         illum, praesentium quasi provident 
                         necessitatibus sapiente temporibus cupiditate.
                         </p></div>
                <div className="content__thebrand-3">
                    <img src="../image/intro3.png"
                     className="content__thebrand-img-3"/>
                     <p className="content__thebrand-text-3">
                         Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Aliquam
                         illum, praesentium quasi provident 
                         necessitatibus sapiente temporibus cupiditate.
                         </p></div>
                    <div className="content__thebrand-4">
                        <img src="./image/pen1.png" className="content__thebrand-4-1"/>
                        <img src="./image/pen2.png" className="content__thebrand-4-2"/>
                        <img src="./image/pen2.png" className="content__thebrand-4-3"/>
                    </div>
                    
                    
                         
                </div>
            </div>
        );
    }
}

export default ContentThebrand;