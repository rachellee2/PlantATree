import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inCart } from './InCart';

export default class CartItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row text-uppercase text-center my-3">
				<div className="btn col-10 mx-auto col-lg-2">
					<Link to="/ritemlist">
						<i className="fas fa-times-circle" onClick={() => inCart.deleteItem(this.props)} />
					</Link>
				</div>
				<div className="col-10 mx-auto col-lg-2 w-10 h-10">
					<div className="img-container">
						<img className="img-fluid" src={this.props.img} />
					</div>
				</div>
				<div className="col-10 mx-auto col-lg-2">{this.props.name}</div>
				<div className="col-10 mx-auto col-lg-2">$ {this.props.price}</div>
			</div>
		);
	}
}
