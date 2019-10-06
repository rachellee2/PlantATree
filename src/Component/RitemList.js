import React, { Component } from 'react';
import { Ritem } from './Ritem';
import { TreeList } from './Tree';

export const RitemList = () => {
	// List of trees displayed at the product page
	return (
		<div>
			<div className="row">{TreeList.map((item) => (
				<Ritem {...item} key={item.state.id}
				/>
			))}
			</div>
		</div>
	);
};

// export default RitemList;
