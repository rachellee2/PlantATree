import React, { Component } from 'react';
import { inCart } from './Cart/InCart';
import { Link } from 'react-router-dom';
import '../pages/css/Product.css';

export default class ItemDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<div id="main" className="mx-auto">
				{console.log(this.props)}

				<div id="p_cont15">
					<h1>{this.props.location.name}</h1>
				</div>

				<div id="cont5">
					<img id="cont24" src={this.props.location.item.state.img} alt="" />
					<h2 id="p_cont18">
						Description:
						<h3 id="cont6">{this.props.location.item.state.description}</h3>
						<div id="cont19">
							<div id="cont8">
								<h3> Tree Type: {this.props.location.item.state.type}</h3>
								<br />
								<h3>Tree Height: {this.props.location.item.state.height}</h3>
								<br />
								<h3>Maintain: {this.props.location.item.state.maintain}</h3>
								<br />
								<h3>Soil: {this.props.location.item.state.soil}</h3>
								<br />
								<h3>Sun: {this.props.location.item.state.sun}</h3>
								<br />
							</div>
							<div id="cont10">
								<h1>Total Price: $ {this.props.location.item.state.price}</h1>
								<Link
									to="/Cart"
									style={
										this.props.location.item.state.isAdded ? (
											{ pointerEvents: 'none' }
										) : (
											{ pointerEvents: 'auto' }
										)
									}
								>
									<button
										className="btn btn-success"
										onClick={() => {
											inCart.addToCart(this.props.location.item.state);
										}}
										disabled={this.props.location.item.state.isAdded ? true : false}
									>
										{this.props.location.item.state.isAdded ? 'Added' : 'Add to Cart'}
									</button>
								</Link>
							</div>
						</div>
					</h2>
				</div>
			</div>
		);
	}
}
