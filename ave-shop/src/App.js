import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routerdom from './Components/Router/Routerdom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ContentHome from './Components/Contents/ContentHome';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header></Header>
        <Routerdom></Routerdom>
        <Footer></Footer>
      </div>
      </Router>
    );
  }
}

export default App;