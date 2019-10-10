import React, { Component } from 'react';
import { inCart } from './Cart/InCart';
import { Link } from 'react-router-dom';
import '../pages/css/Product.css';

export default class ItemDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-10 mx-auto text-center my-5">
						<h2>{this.props.location.item.state.name}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3">
						<img src={this.props.location.item.state.img} className="img-fluid" alt="" />
					</div>
					<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
						<h3>{this.props.location.item.state.name}</h3>

						<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
							Type : <span className="text-uppercase">{this.props.location.item.state.type}</span>
						</h4>
						<h4 className="my-3">
							price : <span>$</span>
							{this.props.location.item.state.price}
						</h4>
						<h5 className="my-2">
							maximum height : <span className="lead">{this.props.location.item.state.height}</span>
						</h5>
						<h5 className="my-2">
							maintenance : <span className="lead">{this.props.location.item.state.maintain}</span>
						</h5>
						<h5 className="my-2">
							soil drainage : <span className="lead">{this.props.location.item.state.soil}</span>
						</h5>
						<h5 className="my-2">
							weather condition : <span className="lead">{this.props.location.item.state.sun}</span>
						</h5>
						<h5 className="text-capitalize font-weight-bold mt-4 mb-2">description :</h5>
						<p className="lead">{this.props.location.item.state.description}</p>
						<Link
							to="/product"
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
			</div>
		);
	}
}
