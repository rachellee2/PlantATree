import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inCart } from './InCart';

export default class CartItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(inCart);
		return (
			<div className="row text-uppercase text-center my-3 align-middle">
				<div className="btn col-10 mx-auto col-lg-2">
					<Link to="/cart">
						<i className="fas fa-times-circle text-danger mt-lg-4" onClick={() => inCart.deleteItem(this.props)} />
					</Link>
				</div>
				<div className="col-10 mx-auto col-lg-2 w-10 h-10 mb-2">
					<div className="img-container">
						<img className="img-fluid" src={this.props.img} />
					</div>
				</div>
				<div className="col-10 mx-auto col-lg-2"><h6 className="mt-lg-5">{this.props.name}</h6></div>
				<div className="col-10 mx-auto col-lg-2"><h6 className="my-auto mt-lg-5 mt-md-2 mt-sm-1">$ {this.props.price}</h6></div>
			</div>
		);
	}
}
