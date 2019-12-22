import React, { Component } from 'react';
import './Header.css';
import HeaderTop from './HeaderTop';
import HeaderContent from './HeaderContent';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <HeaderTop></HeaderTop>
                <HeaderContent></HeaderContent>
            </div>
        );
    }
}

export default Header;