import React, { Component } from 'react';
import './Header.css';
class HeaderHome extends Component {
    render() {
        return (
            <div>
                <img className="header__content-img" src="./image/home.png">
                      
                </img>
                <div className="header__content-text-logo">AVE</div>
                
            </div>
        );
    }
}

export default HeaderHome;