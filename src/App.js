import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Product, Special, Stores, Register, logIn, item, Paypal } from './pages';
import CartComp from './Component/Cart/CartComp';
import { inCart } from './Component/Cart/InCart';
import RitemList from './Component/RitemList';
import ItemDetail from './Component/ItemDetail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		let cartCount = inCart.state.item.length;
		return (
			<Router>
				<div className="pageIndex">
					<div id="AppCont3">
						<h1 id="AppCont4">
						<Link to="/" className="text-white text-decoration-none">
						PlantATree
						</Link>
						</h1>
						<Link id="AppCont5" to="/Register">
							Register
						</Link>
						<h4 id="AppCont5"> / </h4>
						<Link id="AppCont5" to="/logIn">
							log In
						</Link>
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
								<li id="AppCont1">
									<Link to="/ritemlist">Test pdt</Link>
								</li>
							</ul>
						</div>
					</nav>

					<Route exact path="/" component={Home} />
					<Route path="/Product" component={Product} />
					<Route path="/Special" component={Special} />
					<Route path="/Stores" component={Stores} />
					<Route path="/Register" component={Register} />
					<Route path="/logIn" component={logIn} />
					<Route path="/Cart" component={CartComp} />
					<Route path="/item" component={item} />
					<Route path="/paypal" component={Paypal} />
					<Route path="/ritemlist" component={RitemList} />
					<Route path="/ritemdetail" component={ItemDetail} />
					<div className="w-100 mt-5"></div>
				<footer class="footer-copyright text-center footer-green py-3 botton-0 letter-spacing-5">
					<div>
						<a href="/">TreeCo</a>
						<span>&copy; 2019 PlantATree.</span>
					</div>
					<div class="ml-auto">| <span>Powered by</span> TreeCo | Copyright: Rachel Lee, YoonKun Lee, John Norvie Rosario, Bonita Ryda |
					</div>
				</footer>
				</div>
			</Router>
		);
	}
}

export default App;
