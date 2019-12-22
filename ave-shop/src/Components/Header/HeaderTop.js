import React, { Component } from 'react';
import './Header.css';
import HeaderTopbar from './HeaderTopbar';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import HeaderSubnav from './HeaderSubnav';
import HeaderShowNav from './HeaderShowNav';

class HeaderTop extends Component {
    constructor(props) {
        super(props);
        this.state = { show : false}};
      Clickshow = ()=>{this.setState({
        show: !this.state.show
        
      });}
      ShowNav = ()=>{
        if(this.state.show === true)
        return (<HeaderShowNav></HeaderShowNav>)
        
        
      }
       
    render() {
        
        return (
            <div className="header__top">
                <HeaderTopbar></HeaderTopbar>
                <div className="container header__nav-in">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 "><a href="/"><p className="header__logo">AVENUE <b>FASHION</b></p></a></div>
                        <div className="col-xl-6 "><HeaderNav></HeaderNav></div>
                        <i className = "fa fa-bars menu__collapse  col-md-4 col-sm-4 col-4 " onClick={this.Clickshow}></i>
                        <div className="col-xl-2 col-lg-8 col-md-8 col-sm-8 col-8"><HeaderSearch></HeaderSearch></div>
                        
                    </div>
                    {this.ShowNav()}
                </div>
                
               
            </div>
        );
    }
}

export default HeaderTop;