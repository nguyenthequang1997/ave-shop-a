import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  

class HeaderShowNav extends Component {
    render() {
        return (
            <Router>
            <div>
                <div className="header__nav-show">
                
                <ul>
                   <li><Link to ="/">MENS</Link></li>
                   <li><Link to ="/">WOMENS</Link></li>
                   <li><Link to ="/thebrand">THE BRAND</Link></li>
                   <li><Link to ="/localstore">LOCAL STORES</Link></li>
                   <li><Link to ="/lookbook">LOOK BOOK</Link></li>
                </ul>
                
            </div>
            
            </div></Router>
        );
    }
}

export default HeaderShowNav;