import React from 'react';
import delivery from './images/delivery.JPG';
import discount from './images/discount.JPG';
import './css/special.css';

const Special = () => {
    return(
        <div className="container">        
            <div className="main-wrapper">
                <div className="main-featured">
                    <div className="sub1">
                        <h2>Free Delivery!</h2>
                            <img src={delivery} alt="free delivery"/>     
                        <p>
                            <center><strong>Free Delivery when you order more than more than 10 Products!</strong></center>
                        </p>
                    </div>
                    <div className="sub2">
                        <h2>VIP Members!</h2>
                            <img src={discount} alt="vip membership"/>
                        <p>
                            <center><strong>Get a 10% discount when you sign up to TreeCo.</strong></center>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <center/>This is for footer
            </div>
         </div>
    )
}

export default Special;