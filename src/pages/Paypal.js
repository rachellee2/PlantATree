import React from 'react';
import { inCart } from '../Component/Cart/InCart';
import { Link } from 'react-router-dom';
import './css/paypal.css'; 
const Paypal = () => {
    return(
        <div>
                    <h1>ALREADY HAVE A PAYPAL ACCOUNT?!</h1>
                <div className="container">
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required="Please fill this field."></input>
                </div>
                <div className="container">
                    <label for="password"><b>Password</b></label>
                    <input type="text" placeholder="Enter password" name="password" required="Please fill this field."></input>
                </div><Link to="/" onClick={()=>inCart.resetCart()}>
                <button type="submit">Login</button></Link>
        </div>
    )
}

export default Paypal;