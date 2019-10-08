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
				<div>
					<h2 className="text-uppercase mb-lg-5 mb-md-1 mb-sm-1 text-center">my cart</h2>
				</div>
				<ItemCols />
				<CartList />
				<CartSummary />
			</div>
		);
	}
}

// cart constructor
