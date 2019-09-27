import React, { Component } from 'react';
import TreeData from './data/treeCoData.json';

class jsonHelper extends Component {

	render() {
		return (
			<div>
				{TreeData.treeList.map((trees) => {
					return (
						<div>
							<h4>{trees.type}</h4>
							<h4>{trees.minPrice}</h4>
						</div>
					);
				})}
			</div>
		);
	}
	// render() {
	// 	return (
	// 		<div>
	// 			{TreeData.treeList.map((list, i) => {
	// 				return (
	// 					<div key={i}>
	// 						<h5>{list.tName}</h5>
	// 						<h5>{list.type}</h5>
	// 					</div>
	// 				);
	// 			})}
	// 		</div>
	// 	);
	// }
}

export default jsonHelper;
// JSON.parse(TreeData, (key, value) => {
//   if(typeof value === 'Apple'){
//     return value.toUpperCase();
//   }
//   return value;
// });

// var list = JSON.parse(TreeData);

// export { list };

// import { treeList } from './data/treeList';

// var trees = JSON.parse(treeList);
// console.log(treeList);

// var fs = require('fs');
// var arrayPath = './tree_list.js';

// export class jsonHelper extends React.Component {

//   fsReadFileSynchToArray(filePath) {
//     var data = JSON.parse(fs.readFileSync(filePath));
//     console.log(data);
//     return data;
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export { trees };

// var testArray = [];
// testArray = fsReadFileSynchToArray('./data/treeList.json');

// console.log('---------------------------------------');
// for (var i = 0; i < testArray.length; i++) {
// 	if (testArray[i].type == 'Fruit tree') {
// 		console.log(testArray[i]);
// 	} else {
// 		console.log('NO MATCH???');
// 	}
// }

// document.getElementById('product_label').innerHTML = testArray.tName;

// function performFiltering(target) {
//   var
// }

// // LOADING DATA INTO JSON NEEDS WORK!
// function loadFile(filePath) {
// 	var arrLines = [];
// 	fs.fstatSync(filePath, function(err, stat) {
// 		if (err == null) {
// 			arrLines = fsReadFileSynchToArray(filePath);
// 		} else if (err.code == 'ENOENT') {
// 			console.log('error: loading file ' + filePath + ' not found');
// 		} else {
// 			console.log('error: loading file', err.code);
// 		}
// 	});
// 	return arrLines;
// }
