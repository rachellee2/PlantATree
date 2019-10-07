import React, { Component } from 'react';
import ItemCols from './ItemCols';
import CartList from './CartList';
import CartSummary from './CartSummary';
import { inCart } from './InCart';

export default class CartComp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// {console.log("In Cart: ",this.props)}
		{
			console.log('inCart component has in CartComp: ', inCart);
		}
		return (
			<div className="container">
				<div className="col-10 mx-auto col-lg-7">
					<h2 className="text-uppercase mb-5 text-center">my cart</h2>
				</div>
				<ItemCols />
				<CartList />
				<CartSummary />
			</div>
		);
	}
}

// cart constructor
