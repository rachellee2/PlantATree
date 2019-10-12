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
			<div>
				<div>
					<h3 className="text-secondary text-uppercase mb-lg-4 pb-3 text-center border-bottom">cart</h3>
				</div>
				<ItemCols />
				<CartList />
				<CartSummary />
			</div>
		);
	}
}

// cart constructor
