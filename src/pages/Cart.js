import React from 'react';
import cartIcn from '../images/cart.png';
import delIcn from '../images/delete_icn.png';
import plusIcn from '../images/plus_icn.png';
import minusIcn from '../images/minus_icn.png';
import testImage from '../images/evergreen.jpg';
import './css/Cart';


const Cart = () =>  {
    return(
        <div id="container">
        <div className="page_name">
            <h3>SHOPPING CART</h3>
        </div>

        <div id="shopping_cont">
            <div id="item1" className="item">

                <button className="btn_del" onclick={ (e) => {e.preventDefault(); this.clicked();}}>
                    <img src={delIcn} alt=""></img>
                </button>

                <div className="image">
                    <img src={testImage} alt=""></img>
                </div>
                    
                <div className="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div className="quantity">
                    <button className="btn_quantity">
                        <img src={minusIcn} alt=""></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button className="btn_quantity">
                        <img src={plusIcn} alt="" ></img>
                    </button>
                </div>
                    
                <div className="item-price">$100</div>
            </div>

            <div id="item2" className="item">
                <button className="btn_del">
                        <img src={delIcn} alt=""></img>
                </button>

                <div className="image">
                    <img src={testImage} alt="" ></img>
                </div>
                
                <div className="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                
                <div className="quantity">
                    <button className="btn_quantity">
                        <img src={minusIcn} alt="" ></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button className="btn_quantity">
                        <img src={plusIcn} alt=""></img>
                    </button>
                </div>
                
                <div className="item-price">$100</div>
            </div>

            <div id="item1" className="item">

                <button className="btn_del" onclick="remove_item()">
                    <img src={delIcn} alt="" ></img>
                </button>

                <div className="image">
                    <img src={testImage} alt="" ></img>
                </div>
                    
                <div className="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div className="quantity">
                    <button className="btn_quantity">
                        <img src={minusIcn} alt="" ></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button className="btn_quantity">
                        <img src={plusIcn} alt="" ></img>
                    </button>
                </div>
                    
                <div className="item-price">$100</div>
            </div>

            <div id="item1" className="item">

                <button className="btn_del" onclick="remove_item()">
                    <img src={delIcn} alt="" ></img>
                </button>

                <div className="image">
                    <img src={testImage} alt="" ></img>
                </div>
                    
                <div className="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div className="quantity">
                    <button className="btn_quantity">
                        <img src={minusIcn} alt="" ></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button className="btn_quantity">
                        <img src={plusIcn} alt="" ></img>
                    </button>
                </div>
                    
                <div className="item-price">$100</div>
            </div>
            <div id="item1" className="item">

                <button className="btn_del" onclick="remove_item()">
                    <img src={delIcn} alt="" ></img>
                </button>

                <div className="image">
                    <img src={testImage} alt=""></img>
                </div>
                    
                <div className="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div className="quantity">
                    <button className="btn_quantity">
                        <img src={minusIcn} alt=""></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button className="btn_quantity">
                        <img src={plusIcn} alt="" ></img>
                    </button>
                </div>
                    
                <div className="item-price">$100</div>
            </div>
            <div id="item1" className="item">

                <button className="btn_del" onclick="remove_item()">
                    <img src={delIcn} alt="" ></img>
                </button>

                <div className="image">
                    <img src={testImage} alt="" ></img>
                </div>
                    
                <div className="description">
                    <span>Evergreen</span>
                    <span>Type</span>
                    <span>Age</span>
                    <span>Height</span>
                </div>
                    
                <div className="quantity">
                    <button className="btn_quantity">
                        <img src={minusIcn} alt="" ></img>
                    </button>

                    <input type="text" name="name" value="1"></input>
                    
                    <button className="btn_quantity">
                        <img src={plusIcn} alt="" ></img>
                    </button>
                </div>
                    
                <div className="item-price">$100</div>
            </div>
        </div>

        <div className="purchase">
            <div  id="purchase_cont">
                {/* <ReactExample ></ReactExample> */}
                <select id="paymentMethod" name="payment">
                    <option value="1" defaultValue> Payment Option</option>"
                    <option value="2">Paypal</option>"
                    <option value="3">Creditcard</option>"
                </select><br></br>
                <select id="deliveryMethod" name="payment">
                    <option value="1" defaultValue> Delivery Option</option>"
                    <option value="2">Pickup</option>"
                    <option value="3">Delivery</option>"
                </select>  
                <label className="payment">: $ </label>
                <label className="payment">10<br></br></label>
                <label id="total_price" className="payment">Total price: $ </label>
                <label className="payment">310<br></br></label>
                    
                <button id="purchase_btn" className="btn" type="btn" name="btn">
                Proceed to checkout
                </button>
            </div>
        </div>
        </div>
    )


    // function getOptions(){
    //     alert('working');



    //     // var pM = document.getElementById('paymentMethod');
    //     // if(pM==="Creditcard"){
    //     //     alert('if working');
    //     //     document.getElementById("purchase_btn").onclick = function(){
    //     //         this.href = "./Credit.js";
    //     //     };
    //     // }   
    //     // else if(pM==="Paypal"){
    //     //     alert('if working');
    //     //     document.getElementById("purchase_btn").onclick = function(){
    //     //         this.href = "./Credit.js";
    //     //     };
    //     // }
    //     // else{
    //     //     alert('failed');
    //     // }
    // }

    // function clicked(){
    //     console.log('this button clicked');
    // }

}


export default Cart;