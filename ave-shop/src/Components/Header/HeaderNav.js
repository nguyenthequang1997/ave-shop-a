import React, { Component } from 'react';
import './Header.css';
import HeaderSubnav from './HeaderSubnav';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


class HeaderNav extends Component {
        constructor(props) {
          super(props);
          this.state = { trangthai : false}};
        ThaydoiTrangthai = ()=>{this.setState({
          trangthai: !this.state.trangthai
          
        });}
        Hienthi = ()=>{
          if(this.state.trangthai === true)
          return (<HeaderSubnav></HeaderSubnav>)
          
          
        }
         
    
    render() {
        return (
          
            <div>
                <div className="header__nav">
                
                    <ul>
                       <li><Link to onClick={this.ThaydoiTrangthai}>MENS</Link></li>
                       <li><Link to ="/">WOMENS</Link></li>
                       <li><Link to ="/thebrand">THE BRAND</Link></li>
                       <li><Link to ="/localstore">LOCAL STORES</Link></li>
                       <li><Link to ="/lookbook">LOOK BOOK</Link></li>
                    </ul>
                    {this.Hienthi()}
                </div>
                
            </div>
  
  
 
           
        );
    }
}

export default HeaderNav;