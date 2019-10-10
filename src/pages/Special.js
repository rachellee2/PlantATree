import React from 'react';
import { TreeList } from '../Component/Tree.js';

const Special = () => {
	return (
		<div>
			<h2>Special page</h2>
			<h4>{TreeList[7].state.name}</h4>
			<img src={TreeList[7].state.img}></img> 
			<div>src={TreeList[7].state.img}</div>  
		</div>
	);
};

export default Special;
