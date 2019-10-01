import React from 'react';
import tree1 from './images/tree1.jpg';
import ad3 from './images/ad3.JPG';
import './css/advertisement.css';

const Advertisement = () => {
        return(
            <div className="container">
                <div className="main-wrapper">
                    <div className="ads-wrapper">
                        <h2>Advertisement</h2>
                        <img src={tree1}/> 
                    </div>
                    <div className="ads-wrapper">
                        <h2>Advertisement</h2>
                        <img src={ad3}/> 
                    </div>
                </div>
                <div className="footer">
                    <center/>This is for footer
                </div>
            </div>
        )
    }

export default Advertisement;