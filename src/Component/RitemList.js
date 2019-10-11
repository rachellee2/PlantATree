import React, { Component } from 'react'
import Ritem from './Ritem';
import { inCart } from './Cart/InCart';
import { TreeList } from './Tree';

export default class RitemList extends Component {
	render() {
		console.log("inCart component has in itemList: ", inCart)
		return (
			<div>
				<div className="row">
					<div className="mx-auto ml-sm-3 mr-sm-3 col-xs-11 col-sm-3 col-md-3 col-lg-2 bg-light rounded" style={StyleSheet.right}>
						<h4 className="my-4">Filters</h4>
						<h6 className="mt-3">
							Tree Type:
						<br/>
							<select className="w-100 py-1" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="2">Hedge</option>"
								<option value="3">Evergreen</option>"
								<option value="4">NZ native</option>"
								<option value="5">Fruit tree</option>"
								<option value="6">Flower tree</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Soil Drainage:
						<br/>
							<select className="w-100 py-1" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="2">Slow</option>"
								<option value="3">Medium</option>"
								<option value="4">Fast</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Sun:
						<br/>
							<select className="w-100 py-1" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="2">Shade</option>"
								<option value="3">Medium</option>"
								<option value="4">Sunny</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Maintenance:
						<br/>
							<select className="w-100 py-1" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="2">AnyEasy</option>"
								<option value="3">Medium</option>"
								<option value="4">Hard</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Max Height:
						<br/>
							<select className="w-100 py-1" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="2">Under 1m</option>"
								<option value="3">1 - 2M</option>"
								<option value="4">2 - 3M</option>"
								<option value="5">Over 3M</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Growth Rate:
						<br/>
							<select className="w-100 py-1" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="2">Slow</option>"
								<option value="3">Medium</option>"
								<option value="4">Fast</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Price Range:
						<br/>
							<select className="w-100 py-1" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="2">$10-25</option>"
								<option value="3">$25-50</option>"
								<option value="4">$50-75</option>"
								<option value="5">Over $75</option>"
							</select>
						</h6>
						<input className="mt-4 mb-5 w-100 py-1" type="button" value="Apply" />
					</div>
					<div className="col-xs-12 col-sm-8 col-md-8 mx-auto col-lg-9 mt-3 align-right float-sm-center float-md-right float-lg-right">
						<div className="row">{TreeList.map((item) => <Ritem {...item} key={item.state.id} />)}</div>
					</div>
				</div>
			</div>
		)
	}
}
