import React, { Component } from 'react';
import ContentHome from '../Contents/ContentHome';
import ContentThebrand from '../Contents/ContentThebrand';
import ContentLocalstore from '../Contents/ContentLocalstore';
import ContentLookbook from '../Contents/ContentLookbook';
import ContentSignup from '../Contents/ContenSignup';
import ContentViewitem from '../Contents/ContentViewitem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

class Routerdom extends Component {
    render() {
        return (
            <div>
                 <Switch>
                   
              <Route path="/thebrand">
                <ContentThebrand />
              </Route>
              
              <Route path="/localstore">
                <ContentLocalstore/>
              </Route>
              <Route path="/lookbook">
                <ContentLookbook />
              </Route>
              <Route path="/viewitem">
                <ContentViewitem />
              </Route>
              <Route path="/signup">
                <ContentSignup/>
              </Route><Route path="/">
                    <ContentHome />
                  </Route>
              
            </Switch>
            </div>
        );
    }
}

export default Routerdom;