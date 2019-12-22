import React, { Component } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


class HeaderTopbar extends Component {
    render() {
        return (
            <div>
                <div className="header__top-bar">
           
                    <ul>
                        <li><Link to ="/signup">Register</Link></li>
                        <li><Link to="/signup">Sign In</Link></li>
                        <li><a className="fa fa-shopping-cart"> (0)</a></li>
                    </ul>

                 
                </div>

            </div>
        );
    }
}

export default HeaderTopbar;