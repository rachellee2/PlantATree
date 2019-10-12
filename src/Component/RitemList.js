import React, { Component } from 'react';
import Ritem from './Ritem';
import { inCart } from './Cart/InCart';
import Tree, { TreeList } from './Tree';
import F, { filteredTrees } from './Filtered';
import { Link } from 'react-router-dom';

var tempList = [];
export default class RitemList extends Component {
	filter() {
		filteredTrees.state.filter = [];
		console.log('filter length', filteredTrees.length < 1);
		for (var i = 0; i < TreeList.length; i++) {
			if (
				(TreeList[i].state.type === document.getElementById('sType').value ||
					document.getElementById('sType').value == 'any') &&
				(TreeList[i].state.soil === document.getElementById('sSoil').value ||
					document.getElementById('sSoil').value == 'any') &&
				(TreeList[i].state.sun === document.getElementById('sSun').value ||
					document.getElementById('sSun').value == 'any') &&
				(TreeList[i].state.maintain === document.getElementById('sMaintain').value ||
					document.getElementById('sMaintain').value == 'any') &&
				(TreeList[i].state.height === document.getElementById('sHeight').value ||
					document.getElementById('sHeight').value == 'any') &&
				(TreeList[i].state.growthRate === document.getElementById('sGrowth').value ||
					document.getElementById('sGrowth').value == 'any')
			) {
				console.log('TRUE ');
				tempList = [ ...tempList, TreeList[i].state ];
				filteredTrees.addTree(TreeList[i]);
				console.log('Filtered added', filteredTrees.state.filter);
			}
			if (filteredTrees.state.filter.length < 1) {
				filteredTrees.state.noneResult = 1;
			}
		}
	}

	reset() {
		filteredTrees.reset();
		document.getElementById('sType').setAttributeNS('any');
	}

	render() {
		{
			console.log('inCart component has in itemList: ', inCart);
		}
		return (
			<div>
				<div>
					<h3 className="text-secondary text-uppercase pb-3 text-center border-bottom">product</h3>
				</div>
				<div className="row">
					<div
						className="mx-auto ml-sm-3 mr-sm-3 col-xs-11 col-sm-3 col-md-3 col-lg-2 mt-4 bg-light rounded"
						style={StyleSheet.right}
					>
						<h4 className="my-4">Filters</h4>
						<h6 className="mt-3">
							Tree Type:
							<br />
							<select className="w-100 py-1" id="sType" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Hedge">Hedge</option>"
								<option value="Evergreen">Evergreen</option>"
								<option value="NZ native">NZ native</option>"
								<option value="Fruit tree">Fruit tree</option>"
								<option value="Flower tree">Flower tree</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Soil Drainage:
							<br />
							<select className="w-100 py-1" id="sSoil" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Slow">Slow</option>"
								<option value="Medium">Medium</option>"
								<option value="Fast">Fast</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Sun:
							<br />
							<select className="w-100 py-1" id="sSun" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Shade">Shade</option>"
								<option value="Medium">Medium</option>"
								<option value="Sunny">Sunny</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Maintenance:
							<br />
							<select className="w-100 py-1" id="sMaintain" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Low">Low</option>"
								<option value="Medium">Medium</option>"
								<option value="High">High</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Max Height:
							<br />
							<select className="w-100 py-1" id="sHeight" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Under 1M">Under 1M</option>"
								<option value="1-2M">1-2M</option>"
								<option value="2-5M">2-5M</option>"
								<option value="Over 5M">Over 5M</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Growth Rate:
							<br />
							<select className="w-100 py-1" id="sGrowth" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Slow">Slow</option>"
								<option value="Medium">Medium</option>"
								<option value="Fast">Fast</option>"
							</select>
						</h6>
						{/* <h6 className="mt-3">
							Price Range:
							<br />
							<select className="w-100 py-1" id="sPrice" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="2">$10-25</option>"
								<option value="3">$25-50</option>"
								<option value="4">$50-75</option>"
								<option value="5">Over $75</option>"
							</select>
						</h6> */}
						<Link to="/product">
							<input
								className="mt-4 w-100 py-1"
								type="button"
								value="Apply"
								onClick={() => this.filter()}
							/>
						</Link>
						<Link to="/product">
							<input
								className="mb-5 mt-2 w-100 py-1"
								type="button"
								value="Reset"
								onClick={() => filteredTrees.reset()}
							/>
						</Link>
					</div>
					<div className="col-xs-12 col-sm-8 col-md-8 mx-auto col-lg-9 mt-2 align-right float-sm-center float-md-right float-lg-right">
						<div className="row">
							{console.log('filtered length', filteredTrees.state.filter.length)}
							{filteredTrees.state.noneResult > 0 ? (
								<h1 className="text-capitalize">no result found</h1>
							) : (
								filteredTrees.state.filter.map((item) => <Ritem {...item} key={item.state.id} />)
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// import React, { Component } from 'react';
// import Ritem from './Ritem';
// import { inCart } from './Cart/InCart';
// import { TreeList } from './Tree';
// import filteredTree from './Filtered';

// export default class RitemList extends Component {
// 	filter() {
// 		console.log(document.getElementById('sType'));
// 		for (var i = 0; i < TreeList.length; i++) {
// 			if (TreeList[i].state.type === document.getElementById('sType')) {
// 			}
// 			// if (TreeList[i].state.type === document.getElementById('sType').value ||
// 			// 		document.getElementById('sType').value === 'any' &&
// 			// 	TreeList[i].state.soil === document.getElementById('sSoil').value ||
// 			// 		document.getElementById('sSoil').value === 'any' &&
// 			// 	TreeList[i].state.sun === document.getElementById('sSun').value ||
// 			// 		document.getElementById('sSun').value === 'any' &&
// 			// 	TreeList[i].state.maintain === document.getElementById('sMain').value ||
// 			// 		document.getElementById('sMain').value === 'any' &&
// 			// 	TreeList[i].state.height === document.getElementById('sHeight').value ||
// 			// 		document.getElementById('sHeight').value === 'any' &&
// 			// 	TreeList[i].state.growthRate === document.getElementById('sGrowth').value ||
// 			// 		document.getElementById('sGrowth').value === 'any') {
// 			// 	console.log(filteredTree);
// 			// }
// 		}
// 	}

// 	render() {
// 		console.log('inCart component has in itemList: ', inCart);
// 		return (
// 			<div>
// 				<div className="row">
// 					<div
// 						className="mx-auto ml-sm-3 mr-sm-3 col-xs-11 col-sm-3 col-md-3 col-lg-2 bg-light rounded"
// 						style={StyleSheet.right}
// 					>
// 						<h4 className="my-4">Filters</h4>
// 						<h6 className="mt-3">
// 							Tree Type:
// 							<br />
// 							<select className="w-100 py-1" id="sType" name="select">
// 								<option value="any" defaultValue>
// 									Any
// 								</option>"
// 								<option value="Hedge">Hedge</option>"
// 								<option value="Evergreen">Evergreen</option>"
// 								<option value="NZ native">NZ native</option>"
// 								<option value="Fruit tree">Fruit tree</option>"
// 								<option value="Flower tree">Flower tree</option>"
// 							</select>
// 						</h6>
// 						<h6 className="mt-3">
// 							Soil Drainage:
// 							<br />
// 							<select className="w-100 py-1" id="sSoil" name="select">
// 								<option value="any" defaultValue>
// 									Any
// 								</option>"
// 								<option value="2">Slow</option>"
// 								<option value="3">Medium</option>"
// 								<option value="4">Fast</option>"
// 							</select>
// 						</h6>
// 						<h6 className="mt-3">
// 							Sun:
// 							<br />
// 							<select className="w-100 py-1" id="sSun" name="select">
// 								<option value="any" defaultValue>
// 									Any
// 								</option>"
// 								<option value="2">Shade</option>"
// 								<option value="3">Medium</option>"
// 								<option value="4">Sunny</option>"
// 							</select>
// 						</h6>
// 						<h6 className="mt-3">
// 							Maintenance:
// 							<br />
// 							<select className="w-100 py-1" id="sMain" name="select">
// 								<option value="any" defaultValue>
// 									Any
// 								</option>"
// 								<option value="2">AnyEasy</option>"
// 								<option value="3">Medium</option>"
// 								<option value="4">Hard</option>"
// 							</select>
// 						</h6>
// 						<h6 className="mt-3">
// 							Max Height:
// 							<br />
// 							<select className="w-100 py-1" id="sHeight" name="select">
// 								<option value="any" defaultValue>
// 									Any
// 								</option>"
// 								<option value="2">Under 1m</option>"
// 								<option value="3">1 - 2M</option>"
// 								<option value="4">2 - 3M</option>"
// 								<option value="5">Over 3M</option>"
// 							</select>
// 						</h6>
// 						<h6 className="mt-3">
// 							Growth Rate:
// 							<br />
// 							<select className="w-100 py-1" id="sGrowth" name="select">
// 								<option value="any" defaultValue>
// 									Any
// 								</option>"
// 								<option value="2">Slow</option>"
// 								<option value="3">Medium</option>"
// 								<option value="4">Fast</option>"
// 							</select>
// 						</h6>
// 						<h6 className="mt-3">
// 							Price Range:
// 							<br />
// 							<select className="w-100 py-1" name="select" id="">
// 								<option value="any" defaultValue>
// 									Any
// 								</option>"
// 								<option value="2">$10-25</option>"
// 								<option value="3">$25-50</option>"
// 								<option value="4">$50-75</option>"
// 								<option value="5">Over $75</option>"
// 							</select>
// 						</h6>
// 						<input className="mt-4 mb-5 w-100 py-1" type="button" value="Apply" onClick={this.filter()} />
// 					</div>
// 					<div className="col-xs-12 col-sm-8 col-md-8 mx-auto col-lg-9 mt-3 align-right float-sm-center float-md-right float-lg-right">
// 						<div className="row">{TreeList.map((item) => <Ritem {...item} key={item.state.id} />)}</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
