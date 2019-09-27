import React, { Component } from 'react';
import TreeData from './data/treeList.json';
import TreeDetail from './TreeDetail';

class TreeList extends Component {
	render() {
		return (
			<div>
				{/* iterating through the json array using map */}
				<h4>hello world</h4>
				{TreeData.map((item, index) => {
					return <TreeDetail treeItem={item} 
                    key= {`tree-list-key ${index}`}/>;
				})}
			</div>
		);
	}
}

export default TreeList;

// import React, { Component } from 'react';

// class CartComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			payment : props.item.pMethod
// 		};
// 	}

// 	handleChange = (event) => {
// 		this.setState({ [event.target.name]: event.target.value });
// 	};

// 	saveItem = () => {
// 		const item = {};
// 		item.pMethod = this.state.pMethod;
// 		// do more with item object as required (e.g. save to database)
// 	};

// 	render() {
// 		return <ReactExample name="pMethod" value={this.state.pMethod} handleChange={this.handleChange} />;
// 	}
// }

// export default ReactExample = (props) => (
// 	<select name={props.name} value={props.value} onChange={props.handleChange}>
// 		<option value="A">Payment Option</option>
// 		<option value="B">Paypal</option>
// 		<option value="C">Creditcard</option>
// 	</select>
// );
