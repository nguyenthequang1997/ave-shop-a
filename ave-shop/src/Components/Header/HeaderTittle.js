import React, { Component } from 'react';
import './Header.css';

class HeaderTittle extends Component {
    render() {
        return (
            <div>
                 <div className="header__tittle">
                    <img src={this.props.imgtittle}></img>
                    <div className="header__tittle-b">
                    <h3 className="header__tittle-text-1"><b>{this.props.sloganbold}  </b> {this.props.slogan}</h3>
                    <h4 className="header__tittle-text-2">{this.props.slogantext}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTittle;