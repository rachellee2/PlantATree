import React, { Component, useState } from 'react';
import CartItem from './CartItem';
import { TreeList } from '../Tree';

export default class CartList extends Component {
	render() {
		return (
			<div className='container-fluid'>
				{TreeList.map((item) => (
					<CartItem id={item.state.id} name={item.state.name} img={item.state.img} price={item.state.price} />
				))}
			</div>
		);
	}
}

// const addToCart = (props) => {
//   console.log('addtoCart clicked');
//   let tempItems = [ ...this.props.Ritem ];
//   const indexOfAdded = tempItems.indexOf(props.id);
//   const item = tempItems[indexOfAdded];
//   item.isAdded = true;
//   const price = item.price;

// };
