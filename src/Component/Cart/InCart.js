import React, { Component } from 'react';
import { TreeList } from '../Tree';

export default class InCart extends Component {
	constructor(item, totalPrice) {
		super();
		this.state = {
			item       : item,
			totalPrice : totalPrice
		};
	}

	testingMethod() {}

	resetCart(){
		console.log("cart length", inCart.state.item.length);
		// for(var i=0;i<inCart.state.item.length;i++){
		// 	console.log("item[i] ",inCart.state.item[i]);
		// 	inCart.deleteItem(inCart.state.item[i]);
		// 	console.log("inCart  ",inCart.state.item);
		// }
		inCart.state.item.map((item)=>{
			inCart.deleteItem(item)
		})
		console.log("cart length", inCart.state.item.length);
		// inCart = new InCart([],0.0);
		return {inCart};
	}

	addToCart(item) {
		console.log('ADDTOCART@@@@@');
		item.isAdded = true;
		const tempCart = [ ...inCart.state.item, item ];
		let tempTotal = 0.0;
		tempTotal = inCart.state.totalPrice + item.price;
		inCart.state.item = tempCart;
		inCart.state.totalPrice = tempTotal;
		return { inCart };
	}

	deleteItem(item) {
		// locate index of the removed item in cart,update isAdded to false, remove item from cart, update total price.
		let tempCartList = [ ...inCart.state.item ];
		let tempTotal = inCart.state.totalPrice;
		tempTotal = tempTotal - item.price;
		tempCartList = tempCartList.filter((element) => {
			return element.id !== item.id;
		});
		let index = TreeList.findIndex(el => el.state.id === item.id);
		TreeList[index].state.isAdded = false;
		inCart.state.totalPrice = tempTotal;
		inCart.state.item = tempCartList;
		return { inCart };
	}

	render() {
		return <div />;
	}
}

var inCart = new InCart([], 0.0);

export { inCart };