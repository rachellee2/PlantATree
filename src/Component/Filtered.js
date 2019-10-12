import React, { Component } from 'react'
import { TreeList } from './Tree';

export default class Filtered extends Component {
  constructor(filter, isNone){
    super();
    this.state={
      filter: filter,
      isNone: isNone
    }
    // this.addTree().bind(this);
  }

  addTree(tree){
    console.log("tree in addTree() is ",tree);
    console.log("filteredTrees", filteredTrees);
    const tempList = [...filteredTrees.state.filter,tree];
    console.log("tempList", tempList);
    filteredTrees.state.filter=tempList;
    filteredTrees.state.noneResult=-1;
    return { filteredTrees };
  }

  reset(){
    filteredTrees.state.filter=TreeList;
    return { filteredTrees };
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

var filteredTrees= new Filtered(TreeList, -1);
export { filteredTrees };