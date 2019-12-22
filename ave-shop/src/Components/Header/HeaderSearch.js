import React, { Component } from 'react';
import './Header.css';
class HeaderSearch extends Component {
    render() {
        return (
            <div>
                <div className="header__search">
                      <input type="text" placeholder="Search"/><i className="fa fa-search" />
                </div>

            </div>
        );
    }
}

export default HeaderSearch;