import React, { Component } from 'react';
import { inCart } from './Cart/InCart';
import { Link } from 'react-router-dom';

export default class Ritem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-9 mx-auto col-md-7 col-lg-3 my-3">
				<div className="box">
					{/* Image of the tree */}
					<Link
						to={{
							pathname : '/ritemdetail',
							item     : this.props
						}}
					>
						<img src={this.props.state.img} />
					</Link>

					<Link
						to='/product' 
						style={this.props.state.isAdded ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }}
					>
						<button
							className="btn btn-success mt-0 w-100 text-capitalize"
							onClick={() => {
								inCart.addToCart(this.props.state);
							}}
							disabled={this.props.state.isAdded ? true : false}
						>
							{this.props.state.isAdded ? 'Added' : 'add to cart'}
						</button>
					</Link>

					{/* Name and price of the tree */}
					<h5>{this.props.state.name}</h5>
					<h4>$ {this.props.state.price}</h4>
				</div>
			</div>
		);
	}
}
