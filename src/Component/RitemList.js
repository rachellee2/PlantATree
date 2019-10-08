import React, { Component } from 'react'
import Ritem from './Ritem';
import { inCart } from './Cart/InCart';
import { TreeList } from './Tree';

export default class RitemList extends Component {
	render() {
		console.log("inCart component has in itemList: ", inCart)
		return (
			<div>
				<div className="row">{TreeList.map((item) => (
					<Ritem {...item} key={item.state.id}
					/>
				))}
				</div>
			</div>
		)
	}
}
