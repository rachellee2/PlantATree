import React, { Component } from 'react';

export default class CartItem extends Component {
	render() {
		return (
			<div className='row text-uppercase text-center my-3'>
				<div className='btn col-10 mx-auto col-lg-2'>
					<i className='fas fa-times-circle' />
				</div>
				<div className='col-10 mx-auto col-lg-2 w-10 h-10'>
					<div className='img-container'>
						<img className='img-fluid' src={this.props.img} />
					</div>
				</div>
				<div className='col-10 mx-auto col-lg-2'>{this.props.name}</div>
				<div className='col-10 mx-auto col-lg-2'>$ {this.props.price}</div>
			</div>
		);
	}
}
