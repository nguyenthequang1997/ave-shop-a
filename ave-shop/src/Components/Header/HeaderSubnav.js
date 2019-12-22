import React, { Component } from 'react';
import './Header.css';
class HeaderSubnav extends Component {
    render() {
        return (
            <div>
                <div className="header__sub-nav">
                    <ul className="header__sub-nav-col1">
                        <li><a href="#">CASUALS</a></li>     
                        <li><a href="#">Jackets</a></li>  
                        <li><a href="#">Hoodies</a></li>  
                        <li><a href="#">Polo Shirts</a></li>  
                        <li><a href="#">Sportswear</a></li>  
                        <li><a href="#">Trousers Chinos</a></li>  
                        <li><a href="#">T-Shirts</a></li>                     

                    </ul>
                    <ul className="header__sub-nav-col2">
                        <li><a href="#">FORMAL</a></li>     
                        <li><a href="#">Jackets</a></li>  
                        <li><a href="#">Shirts</a></li>  
                        <li><a href="#">Suits</a></li>  
                        <li><a href="#">Trousers </a></li>  
                                          

                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderSubnav;