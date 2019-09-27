import React from 'react';
import './css/Product.css';
import evergreen from '../images/evergreen.jpg'

const Product = () => {
    return(
        <div id="main">
            <div id="p_cont17">
                <div id="cont14">  
                    <br/>
                    <h1>
                        Filters
                    </h1>   
                    <br/>
                    <br/>
                    <br/>                  
                    <h3>
                        Tree Type:<br/><br/>   
                        <select id="cont13" name="select">
                            <option value="1" selected>Fruit tree</option>"
                            <option value="2">Hedge</option>"
                            <option value="3">Evergreen</option>"
                            <option value="4">NZ native</option>"
                        </select>
                    </h3>
                    <br/>
                    <br/>
                    <h3>
                        Soil Drainage:
                        <br/>
                        <br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Slow</option>"
                            <option value="2">Medium</option>"
                            <option value="3">Fast</option>"
                            <option value="4">Any</option>"
                        </select>                                                                      
                    </h3>
                    <br/>
                    <br/>
                    <h3>
                        Sun:
                        <br/>
                        <br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Shade</option>"
                            <option value="2">Medium</option>"
                            <option value="3">Sunny</option>"
                            <option value="4">Any</option>"
                        </select>                                                                          
                    </h3>
                    <br/>
                    <br/>
                    <h3>
                        Maintenance:
                        <br/>
                        <br/> 
                        <select id="cont13" name="select">
                            <option value="1" selected>Easy</option>"
                            <option value="2">Medium</option>"
                            <option value="3">Hard</option>"
                            <option value="4">Any</option>"
                        </select>
                    </h3>
                    <br/>
                    <br/>
                    <h3>
                        Max Height
                        <br/>
                        <br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Under 1m</option>"
                            <option value="2">1 - 2M</option>"
                            <option value="3">2 - 3M</option>"
                            <option value="4">Over 3M</option>"
                        </select>
                    </h3>
                    <br/>
                    <br/>
                    <h3>
                        Growth Rate:
                        <br/>
                        <br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Slow</option>"
                            <option value="2">Medium</option>"
                            <option value="3">Fast</option>"
                            <option value="4">Any</option>"
                        </select>                                               
                    </h3>
                    <br/>
                    <br/>
                    <h3>
                        Price Range 
                        <br/>
                        <br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>$10-25</option>"
                            <option value="2">$25-50</option>"
                            <option value="3">$50-75</option>"
                            <option value="4">Over $75</option>"
                        </select>
                    </h3>
                    <br/>
                    <br/>
                    <br/>
                    <input id="cont13" type="button" value="Apply"></input>
                    <br/><br/>
                </div>
            </div>    
            <div id="cont3">
                    <div id="cont2">
                        <a href="/item">
                        <img src={evergreen} alt="" width="350" height="350"></img></a>
                        <h3>Evergreen</h3>   
                    </div>
                    <div id="cont2">
                        <img src={evergreen} alt="" width="350" height="350"></img> 
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div>
                    <div id="cont2">
                    <img src={evergreen} alt="" width="350" height="350"></img>
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div>
                    <div id="cont2">
                    <img src={evergreen} alt="" width="350" height="350"></img>
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div><div id="cont2">
                    <img src={evergreen} alt="" width="350" height="350"></img>
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div><div id="cont2">
                    <img src={evergreen} alt="" width="350" height="350"></img>
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div><div id="cont2">
                    <img src={evergreen} alt="" width="350" height="350"></img>
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div><div id="cont2">
                    <img src={evergreen} alt="" width="350" height="350"></img> 
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div><div id="cont2">
                    <img src={evergreen} alt="" width="350" height="350"></img>
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div>
                    <div id="cont2">
                    <img src={evergreen} alt="" width="350" height="350"></img>
                        <h3>Acer Palmatum Bald Smith</h3>   
                    </div>
                </div>
            </div>

            
        
    )
}

export default Product;