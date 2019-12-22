import React, { Component } from 'react';
import './Header.css';
import HeaderHome from './HeaderHome';
import HeaderTittle from './HeaderTittle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


class HeaderContent extends Component {
    render() {
        return (
            <div>
                 <Switch>
                   
                   <Route path="/thebrand">
                     <HeaderTittle 
                     imgtittle="../image/thebrand.png" 
                     sloganbold="THE" 
                     slogan="BRAND" 
                     slogantext="COMPANY SLOGAN GOES HERE" />
                   </Route>
                   
                   <Route path="/localstore">
                   <HeaderTittle 
                   imgtittle="./image/thebrand.png" 
                   sloganbold="THE" 
                   slogan="BRAND" 
                   slogantext="COMPANY SLOGAN GOES HERE"/>
                   </Route>
                   <Route path="/lookbook">
                   <HeaderTittle 
                   imgtittle="./image/thebrand.png" 
                   sloganbold="THE" 
                   slogan="BRAND" 
                   slogantext="COMPANY SLOGAN GOES HERE"/>
                   </Route>
                   <Route path="/viewitem">
                   <HeaderTittle 
                   imgtittle="./image/thebrand.png" 
                   sloganbold="THE" 
                   slogan="BRAND" 
                   slogantext="COMPANY SLOGAN GOES HERE"/>
                   </Route>
                   <Route path="/signup">
                   <HeaderTittle 
                   imgtittle="./image/thebrand.png" 
                   sloganbold="THE" 
                   slogan="BRAND" 
                   slogantext="COMPANY SLOGAN GOES HERE"/>
                   </Route><Route path="/">
                         <HeaderHome />
                       </Route>
                   
                 </Switch>
                
            </div>
        );
    }
}

export default HeaderContent;