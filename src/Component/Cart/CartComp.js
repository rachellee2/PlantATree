import React from 'react';
import ItemCols from './ItemCols';
import CartList from './CartList';
import CartSummary from './CartSummary';

export const CartComp = () => {
	return (
		<div>
			<div className='col-10 mx-auto text-center'>
				<h2 className='text-uppercase mb-5'>my cart</h2>
			</div>
			<ItemCols />
			<CartList />
			<CartSummary />
		</div>
	);
};
