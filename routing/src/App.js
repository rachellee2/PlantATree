import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Product, Special, Stores, Register, logIn, Cart } from './pages';
import TreeList from './TreeList'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="pageIndex">
          <div id="cont3">
            
            <h1 id="cont4">TreeCo</h1> 
              <Link id="cont5" to="/Register">Register</Link>             
              <h4 id="cont5"> / </h4>            
              <Link id="cont5" to="/logIn">log In</Link>                      
          </div>
          
          <nav className="wrapper1">
            <div id="cont2">
              <ul id="cont6">
                <li id="cont1">
                  <Link to="/">Home</Link>
                </li>
                <li id="cont1">
                  <Link to="/Product">Product</Link>
                </li>
                <li id="cont1">
                  <Link to="/Special">Special</Link>
                </li>
                <li id="cont1">
                  <Link to="/Stores">Stores</Link>
                </li>
                <li id="cont1">
                  <Link to="/Cart">Cart</Link>
                </li>
              </ul>
            </div>
            
          </nav>

          <Route exact path='/' component={Home}/>
          <Route path='/Product' component={Product}/>
          <Route path='/Special' component={Special}/>
          <Route path='/Stores' component={Stores}/>
          <Route path='/Register' component={Register}/>
          <Route path='/logIn' component={logIn}/>
          <Route path='/Cart' component={Cart}/>
        </div>
      </Router>
    );
  }
}

export default App;