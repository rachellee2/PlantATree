import React from 'react';
import './css/paypal.css'; 
const Paypal = () => {
    return(
        <div>
                    <h1>ALREADY HAVE A PAYPAL ACCOUNT?!</h1>
                <div className="container">
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required></input>
                </div>
                <div className="container">
                    <label for="password"><b>Password</b></label>
                    <input type="text" placeholder="Enter password" name="password" required></input>
                </div>
                <button type="submit">Login</button>
        </div>
    )
}

export default Paypal;