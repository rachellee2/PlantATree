import React, { Component } from 'react';
import TreeData from './data/treeList.json'

class TreeDetail extends Component {
    render () {
        const {treeItem} = this.props
        // const treeItem = this.props.treeItem
        // can also be used
        return (
            <div className="TreeDetail">
                {
                    treeItem.map(function(tree){
                        return (
                            <div key={tree.id}>
                                <h1>tree.tName</h1>
                                <h1>tree.type</h1>
                                <h1>tree.soil</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TreeDetail