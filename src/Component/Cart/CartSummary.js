import React, { Component } from 'react';
import { inCart } from './InCart';
import { Link } from 'react-router-dom';

export default class CartSummary extends Component {
	render() {
		{
			console.log('cart length', inCart);
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mt-5 mb-2 ml-sm-5 ml-md-auto col-sm-8 text capitalize text-right">
						<h4 className="text-capitalize">
							total price : $ {parseFloat(inCart.state.totalPrice.toFixed(2))}
						</h4>
						<div>
							<Link
								to="/paypal"
								style={
									inCart.state.item.length == 0 ? (
										{ pointerEvents: 'none' }
									) : (
										{ pointerEvents: 'auto' }
									)
								}
							>
								<button className="btn btn-success w-auto text-uppercase mt-1 mb-2 ml-2">
									proceed to checkout
								</button>
							</Link>
							<Link
								to="/cart"
								onClick={() => inCart.resetCart()}
								style={
									inCart.state.item.length == 0 ? (
										{ pointerEvents: 'none' }
									) : (
										{ pointerEvents: 'auto' }
									)
								}
							>
								<button className="btn btn-danger w-auto text-uppercase mt-1 mb-5">
									clear cart
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
