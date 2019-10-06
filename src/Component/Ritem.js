import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Ritem = (props) => {
	// Individual tree that are displayed at the product page
	const addToCart = () => {
		console.log(props);
	};

	return (
		<div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="box">
				{/* Image of the tree */}
				<Link
					to={{
						pathname     : '/ritemdetail',
						name: props.state.name,
						img:props.state.img,
						desc:props.state.description,
						type:props.state.type,
						height:props.state.height,
						maintain:props.state.maintain,
						soil:props.state.soil,
						sun:props.state.sun,
						price:props.state.price
					}}
				>
					<img src={props.state.img} />
				</Link>

				{/* Add to cart button */}
				<button className="btn btn-success mt-0 w-100 text-capitalize" onClick={addToCart}>
					add to cart
				</button>

				{/* Name and price of the tree */}
				<h2>{props.state.name}</h2>
				<h4>$ {props.state.price}</h4>
			</div>
		</div>
	);
};
