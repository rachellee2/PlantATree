import React from 'react';
//import { Slide} from 'react-slideshow-image';
import ad1 from './images/ad1.JPG';
import ad2 from './images/ad2.JPG';
import ad3 from './images/ad3.JPG';
import './css/homestyle.css';



const Home = () => {
        return(
            <div>        
            <div className="main-wrapper">
                    <div className="ads-wrapper">
                        <h2>Advertisement</h2>
                        <a href="/Advertisement">
                            <img src={ad1} alt="advertisements"/>
                        </a>
                    </div>
                    <div className="ads-wrapper">
                        <h2>Specials</h2>
                        <a href="/Special">
                            <img src={ad2} alt="deals and sepcials"/>
                        </a>
                    </div>
                    <div className="ads-wrapper">
                        <h2>Tips</h2>
                        <a href="/Tips">
                        <img src={ad3} alt="Guide to grow your trees safe"/>
                        </a>
                    </div>
            </div>
         </div>

        )
    }

export default Home;