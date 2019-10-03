import React, { Component } from 'react';
import apple_img from '../images/apple.jpg';
import blueberry_img from '../images/blueberry.jpg';
import bluespruce_img from '../images/bluespruce.jpeg';
import cherryblossom_img from '../images/cherryblossom.jpg';
import lemon_img from '../images/lemon.jpg';
import mountaincabbage_img from '../images/moutaincabbage.jpg';
import rimu_img from '../images/rimu.jpg';
import cypress_img from '../images/cypress.jpg';
import rose_img from '../images/rose.jpg';
import viburnum_img from '../images/viburnum.jpg';

class Tree extends Component {
	constructor(name, type, soil, sun, maintain, height, growthRate, Price, img) {
		super();
		this.state = {
			name       : name,
			type       : type,
			soil       : soil,
			sun        : sun,
			maintain   : maintain,
			height     : height,
			growthRate : growthRate,
			Price   : Price,
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
				<p>{this.state.Price}</p>
				<p>{this.state.img}</p>
			</div>
		);
	}
}

var apple = new Tree('Apple', 'Fruit tree', 'Medium', 'Sunny', 'Low', 'More than 5M', 'Fast', 49.99, apple_img);

var blueberry = new Tree('Blueberry', 'Fruit tree', 'Fast', 'Medium', 'Medium', '1-2M', 'Slow', 74.99, blueberry_img);

var rose = new Tree('Rose', 'Flower tree', 'Medium', 'Sunny', 'High', 'Under 1M', 'Medium', 49.99, rose_img);

var rimu = new Tree('Rimu', 'NZ native', 'Fast', 'Medium', 'Medium', 'More than 5M', 'Low', 200.99, rimu_img);

var mountainCabbage = new Tree('Mountain Cabbage', 'NZ native', 'Medium', 'Shade','Medium', 'Under 1M','Fast', 24.99, mountaincabbage_img);

var viburnum = new Tree('Viburnum', 'Hedge', 'Fast', 'Shade', 'Medium', '1-2M', 'Medium', 74.99, viburnum_img);

var cypress = new Tree('Cypress', 'Hedge', 'Fast', 'Sunny', 'Medium', 'More than 5M', 'Fast', 49.99, cypress_img);

var blueSpruce = new Tree('Blue Spruce', 'Evergreen', 'Fast', 'Sunny', 'High', '2-5M', 'Slow', 180.99, bluespruce_img);

var lemon = new Tree('Lemon', 'Fruit tree', 'Medium', 'Medium', 'Low', '1-2M', 'Medium', 24.99, lemon_img);

var cherryBlossom = new Tree('Cherry Blossom','Flower tree',	'Slow',	'Sunny','High',	'2-5M',	'Slow',	74.99, cherryblossom_img);

var TreeList = [ apple, blueberry, rose, rimu, mountainCabbage, viburnum, cypress, blueSpruce, lemon, cherryBlossom ];

export { TreeList };