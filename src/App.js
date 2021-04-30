import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCustom from './components/Navbar/NavbarCustom'
import FooterCustom from './components/Footer/FooterCustom'

import Home from "./components/pages/Home/Home"
import Team from "./components/pages/Team/Team"
import Product from './components/pages/Product/Product';


function App() {
  return (
    <div>
      <Router>
        <NavbarCustom />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" exact component={Team} />
          <Route path="/product" exact component={Product} /> 
        </Switch>
        <FooterCustom/>
      </Router>
      
    </div>


  )
}

export default App;

