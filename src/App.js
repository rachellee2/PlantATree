import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Product, Special, Stores, Register, logIn, Cart, item } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="pageIndex">
          <div id="AppCont3">
            
            <h1 id="AppCont4">TreeCo</h1> 
              <Link id="AppCont5" to="/Register">Register</Link>             
              <h4 id="AppCont5"> / </h4>            
              <Link id="AppCont5" to="/logIn">log In</Link>                      
          </div>
          
          <nav className="wrapper1">
            <div id="AppCont2">
              <ul id="AppCont6">
                <li id="AppCont1">
                  <Link to="/">Home</Link>
                </li>
                <li id="AppCont1">
                  <Link to="/Product">Product</Link>
                </li>
                <li id="AppCont1">
                  <Link to="/Special">Special</Link>
                </li>
                <li id="AppCont1">
                  <Link to="/Stores">Stores</Link>
                </li>
                <li id="AppCont1">
                  <Link to="/Cart">My Cart</Link>
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
          <Route path='/item' component={item}/>
        </div>
      </Router>
    );
  }
}

export default App;