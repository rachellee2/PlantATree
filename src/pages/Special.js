import React from 'react';
import TreeData from '../Component/TreeData.js';
import { TreeList } from '../Component/Tree.js';

const Special = () => {
	return (
		<div>
			<h2>Special page</h2>
			<h4>{TreeList[7].state.name}</h4>
		</div>
	);
};

export default Special;
