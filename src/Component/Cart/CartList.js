import React, { Component, useState } from 'react';
import CartItem from './CartItem';
import { inCart } from './InCart';
import { TreeList } from '../Tree';

export default class CartList extends Component {
	render() {
		return (
			<div className="container-fluid">
				{console.log('Tree contains in cartList: ', inCart)}
				{inCart.state.item.map((item) => <CartItem {...item} key={item.id} />)}
			</div>
		);
	}
}
