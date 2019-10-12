import React from 'react';
import { TreeList } from '../Component/Tree.js';

const Special = () => {
	return (
		<div>
				<h3 className="text-secondary text-uppercase mb-4 pb-3 text-center border-bottom">
					special
				</h3>
			<div className="mx-lg-5 mx-md-5 mx-sm-3 col-9 mx-auto col-md-7 col-lg-3 pt-3">
				<img src={TreeList[7].state.img} />
				<h5 className="mx-auto text-center pt-2">{TreeList[7].state.name}</h5>
			</div>
		</div>
	);
};

export default Special;
