import React from 'react';
import evergreen from '../images/evergreen.jpg'
import './css/Product.css';

const item = () => {
    return(
        <div id="main">
            <h1 id="p_cont15">Acer Palmatum Bald Smith</h1>
            <div>
            
            <div id="cont5">
                <img src={evergreen} alt="" width="650" height="650"></img>  
                <h2 id="p_cont18">
                Description: 

                <h4 id="cont6">
                    Acer palmatum Bloodgood Red Japanese Maple
          
                    Highly ornamental deciduous tree with stunning red-purple foliage.  
                    A small neat upright tree, with highly ornamental partially divided, 
                    serrated edged foliage of intense colour.  Around 3 m tall and wide.  
                    In Autumn the foliage becomes bright crimson red before falling.  
                    In cold climates may form attractive red fruits also.   
                    Grows in most free draining garden soils in full or partial sun.  
                    Best in organic rich soils.  Cold and frost tolerant.  
                    Excellent feature free suitable for smaller gardens.
                </h4>                       
           
            </h2>     
            <div id="cont19">
                <div id="cont8">
                        <h2>
                                Tree Type: 
                            </h2>
                            <br/>
                            <h2>
                                Age: 
                                <select name="select">
                                        <option value="1" selected> Less than 1 year></option>"
                                        <option value="2">1 year to 3 years</option>"
                                        <option value="3">3 year to 5 years</option>"
                                        <option value="4">More than 5 Years</option>"
                                </select>
                            </h2>
                            <br/>
                            <h2>
                                Height:
                                <select name="select">
                                        <option value="1" selected> Less than 1M</option>"
                                        <option value="2">1M to 3M</option>"
                                        <option value="3">3M to 5M</option>"
                                        <option value="4">More than 5M</option>"
                                </select>   
                            </h2>
                            <br/>
                            <h2>
                                Quaility:
                                <select name="select">
                                        <option value="1" selected> Okay</option>"
                                        <option value="2">Good</option>"
                                        <option value="3">Fantastic</option>"
                                        <option value="4">Cannot be better</option>"
                                </select>   
                        </h2>
                        <br/>
                        <br/>
                        <button>
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
                        <h1>Total Price: 100</h1>
                    </div> 
                </div>     
            </div> 
                     
            </div>
                    
           
       
         
        
    </div>
    )
}
export default item;