import React, { Component } from 'react';
import cartIcn from '../images/cart.png'
import delIcn from '../images/delete_icn.png'
import plusIcn from '../images/plus_icn.png'
import minusIcn from '../images/minus_icn.png'
import testImage from '../images/evergreen.jpg'
import '../cart.css';


const Cart = () => {
    return(
        <div id="container">
        <div class="page_name">
            <h3>SHOPPING CART</h3>
        </div>

        <div id="shopping_cont">
            <div id="item1" class="item">

                <button class="btn_del" onclick="remove_item()">
                    <img src={delIcn} alt=""></img>
                </button>

                <div class="image">
                    <img src={testImage} alt=""></img>
                </div>
                    
                <div class="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div class="quantity">
                    <button class="btn_quantity">
                        <img src={minusIcn} alt=""></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button class="btn_quantity">
                        <img src={plusIcn} alt="" ></img>
                    </button>
                </div>
                    
                <div class="item-price">$100</div>
            </div>

            <div id="item2" class="item">
                <button class="btn_del" onclick="document.getElementById('item2').remove()">
                        <img src="../components/images/delete_icn.png" alt=""></img>
                </button>

                <div class="image">
                    <img src="../components/images/evergreen.jpg" alt="" ></img>
                </div>
                
                <div class="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                
                <div class="quantity">
                    <button class="btn_quantity">
                        <img src="../components/images/minus_icn.png" alt="" ></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button class="btn_quantity">
                        <img src="../components/images/plus_icn.png" alt=""></img>
                    </button>
                </div>
                
                <div class="item-price">$100</div>
            </div>

            <div id="item1" class="item">

                <button class="btn_del" onclick="remove_item()">
                    <img src="./images/delete_icn.png" alt="" ></img>
                </button>

                <div class="image">
                    <img src="./images/evergreen.jpg" alt="" ></img>
                </div>
                    
                <div class="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div class="quantity">
                    <button class="btn_quantity">
                        <img src="./images/minus_icn.png" alt="" ></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button class="btn_quantity">
                        <img src="./images/plus_icn.png" alt="" ></img>
                    </button>
                </div>
                    
                <div class="item-price">$100</div>
            </div>

            <div id="item1" class="item">

                <button class="btn_del" onclick="remove_item()">
                    <img src="./images/delete_icn.png" alt="" ></img>
                </button>

                <div class="image">
                    <img src="./images/evergreen.jpg" alt="" ></img>
                </div>
                    
                <div class="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div class="quantity">
                    <button class="btn_quantity">
                        <img src="./images/minus_icn.png" alt="" ></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button class="btn_quantity">
                        <img src="./images/plus_icn.png" alt="" ></img>
                    </button>
                </div>
                    
                <div class="item-price">$100</div>
            </div>
            <div id="item1" class="item">

                <button class="btn_del" onclick="remove_item()">
                    <img src="./images/delete_icn.png" alt="" ></img>
                </button>

                <div class="image">
                    <img src="./images/evergreen.jpg" alt=""></img>
                </div>
                    
                <div class="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div class="quantity">
                    <button class="btn_quantity">
                        <img src="./images/minus_icn.png" alt=""></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button class="btn_quantity">
                        <img src="./images/plus_icn.png" alt="" ></img>
                    </button>
                </div>
                    
                <div class="item-price">$100</div>
            </div>
            <div id="item1" class="item">

                <button class="btn_del" onclick="remove_item()">
                    <img src="./images/delete_icn.png" alt="" ></img>
                </button>

                <div class="image">
                    <img src="./images/evergreen.jpg" alt="" ></img>
                </div>
                    
                <div class="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div class="quantity">
                    <button class="btn_quantity">
                        <img src="./images/minus_icn.png" alt="" ></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button class="btn_quantity">
                        <img src="./images/plus_icn.png" alt="" ></img>
                    </button>
                </div>
                    
                <div class="item-price">$100</div>
            </div>



        </div>

        <div class="purchase">
            <div  id="purchase_cont">
                <select name="payment">
                    <option value="1" selected> Payment Option</option>"
                    <option value="2"><a href="./Credit.js">Paypal</a></option>"
                    <option value="3">Creditcard</option>"
                </select><br></br>
                <select name="payment">
                    <option value="1" selected> Delivery Option</option>"
                    <option value="2">Pickup</option>"
                    <option value="3">Delivery</option>"
                </select>  
                <label class="payment">: $ </label>
                <label class="payment">10<br></br></label>
                <label id="total_price" class="payment">Total price: $ </label>
                <label class="payment">310<br></br></label>
                    
                <button id="purchase_btn" class="btn" type="btn" name="btn">
                    <a href="">Proceed to checkout</a>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Cart;