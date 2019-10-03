import React from 'react';
import evergreen from '../images/evergreen.jpg'
import './css/Product.css';
import { TreeList } from '../Component/Tree.js';
import { check } from '../pages/Product.js';
import { Description_List } from '../Component/Description.js'

const item = () => {
    return(
        <div id="main">
            <div id="p_cont15">
                <h1 >{TreeList[check.state.selected].state.name}</h1>
            </div>
                    
            <div id="cont5">
                <img src={TreeList[check.state.selected].state.img} alt="" width="650" height="650"></img>  
                <h2 id="p_cont18">
                    Description: 

                    <h4 id="cont6">
                        {Description_List[check.state.selected].state.Description}
                    </h4>                       
                            
                    <div id="cont19">
                        <div id="cont8">
                            <h3>
                                Tree Type: {TreeList[check.state.selected].state.type}
                            </h3>                        
                            <h3>
                                Age:
                                <br/> 
                                <select id="cont22" name="select">
                                        <option value="1" selected> Less than 1 year></option>"
                                        <option value="2">1 year to 3 years</option>"
                                        <option value="3">3 year to 5 years</option>"
                                        <option value="4">More than 5 Years</option>"
                                </select>
                            </h3>
                            <br/>
                            <h3>
                                Height:
                                <br/>
                                <select id="cont22" name="select">
                                        <option value="1" selected> Less than 1M</option>"
                                        <option value="2">1M to 3M</option>"
                                        <option value="3">3M to 5M</option>"
                                        <option value="4">More than 5M</option>"
                                </select>   
                            </h3>
                            <br/>
                            <h3>
                                Quality:
                                <select id="cont22" name="select">
                                        <option value="1" selected> Okay</option>"
                                        <option value="2">Good</option>"
                                        <option value="3">Fantastic</option>"
                                        <option value="4">Cannot be better</option>"
                                </select>   
                            </h3>
                            <br/>
                            <br/>
                            <button id="cont21">
                                Apply
                            </button>
                        </div>
                        <div id="cont9">
                            <h1>
                                Price
                            </h1>
                            <br/>
                            <h3>
                                Age: + 0
                            </h3>
                            <h3>
                                Height: + 0
                            </h3>
                            <h3>
                                Quality: + 0
                            </h3>
                        </div>                    
                        <div id="cont10">
                            <h1>Total Price: $ {TreeList[check.state.selected].state.Price}</h1>
                        </div> 
                    </div>  
                </h2>    
            </div>                            
        </div>
    )
}
export default item;