import React from 'react';
import './css/pickup&deliveryOpt.css'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Delivery from './delivery';
import Pikcup from './pickup';

const PickupDeliveryOpt = () => {
        return (
            <div>
                <Router>
                <div className="page_name">
                    <center><h1>Pick-up Or Delivery Option</h1><br/></center>
                </div>
                {/*Tigger delivery button*/}
                <div className="button">   
                <Link to="/Delivery"><button className="btn" id="mybtn"> Delivery option</button></Link>
                <Route path='/Delivery' component={Delivery}/>
                </div>
                
                <div className="button">
                <Link to="/Pikcup"><button className="btn" id="mybtn"> Pikcup option</button></Link>
                <Route path='/Pikcup' component={Pikcup}/>
                </div>
                <br/>
                </Router>
            </div>
        )
    }

 
export default PickupDeliveryOpt;