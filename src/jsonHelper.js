// // with require, file can only be read once???
// const config = require('./data/treeCoData.json');

// // Read the JSON data from the file
// const fs = require('fs');
// fs.readFile('./data/treeList.json', 'utf8', 
// (err, jsonString) => { // callback 
//     if (err){
//         console.log("File read failed:", err);
//         return
//     }
//     try{
//         const tree = JSON.parse(jsonString);
//         console.log("Tree type is: ", tree.type);
//     }
//     catch(err){
        
//         console.log(c);
//     }
//     console.log('File data:', jsonString);
// });

// fetch("./data/treeList.json").then(function(resp) {
//     return resp.json();
// })
// .then(function(data){
//     console.log(data)
// })





import React, { Component } from 'react';

class jsonHelper extends Component {
  render() {
    return (
        <div>

        </div>
    );
  }
}

export default App;
