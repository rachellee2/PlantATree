import React, { Component } from 'react';
import evergreen from '../images/evergreen.jpg';

class Tree extends Component {
	constructor(name, type, soil, sun, maintain, height, growthRate, maxPrice, minPrice, img) {
		super();
		this.state = {
			name       : name,
			type       : type,
			soil       : soil,
			sun        : sun,
			maintain   : maintain,
			height     : height,
			growthRate : growthRate,
			maxPrice   : maxPrice,
			minPrice   : minPrice,
			img        : img
		};
	}

	render() {
		return (
			<div>
				<h3>{this.state.name}</h3>
				<p>{this.state.type}</p>
				<p>{this.state.soil}</p>
				<p>{this.state.sun}</p>
				<p>{this.state.maintain}</p>
				<p>{this.state.height}</p>
				<p>{this.state.growthRate}</p>
				<p>{this.state.maxPrice}</p>
				<p>{this.state.minPrice}</p>
				<p>{this.state.img}</p>
			</div>
		);
	}
}

var apple = new Tree('Apple', 'Fruit tree', 'Medium', 'Sunny', 'Low', 'More than 5M', 'Fast', 25, 50, evergreen);

var blueberry = new Tree('Blueberry', 'Fruit tree', 'Fast', 'Medium', 'Medium', '1-2M', 'Slow', 50, 75, evergreen);

var rose = new Tree('Rose', 'Flower tree', 'Medium', 'Sunny', 'High', 'Under 1M', 'Medium', 25, 50, evergreen);

var rimu = new Tree('Rimu', 'NZ native', 'Fast', 'Medium', 'Medium', 'More than 5M', 'Low', 75, 200, evergreen);

var mountainCabbage = new Tree(
	'Mountain Cabbage',
	'NZ native',
	'Medium',
	'Shade',
	'Medium',
	'Under 1M',
	'Fast',
	10,
	25,
	evergreen
);

var viburnum = new Tree('Viburnum', 'Hedge', 'Fast', 'Shade', 'Medium', '1-2M', 'Medium', 50, 75, evergreen);

var cypress = new Tree('Cypress', 'Hedge', 'Fast', 'Sunny', 'Medium', 'More than 5M', 'Fast', 25, 50, evergreen);

var blueSpruce = new Tree('Blue Spruce', 'Evergreen', 'Fast', 'Sunny', 'High', '2-5M', 'Slow', 75, 200, evergreen);

var lemon = new Tree('Lemon', 'Fruit tree', 'Medium', 'Medium', 'Low', '1-2M', 'Medium', 10, 25, evergreen);

var cherryBlossom = new Tree(
	'Cherry Blossom',
	'Flower tree',
	'Slow',
	'Sunny',
	'High',
	'2-5M',
	'Slow',
	50,
	75,
	evergreen
);

var TreeList = [ apple, blueberry, rose, rimu, mountainCabbage, viburnum, cypress, blueSpruce, lemon, cherryBlossom ];

export { TreeList };
