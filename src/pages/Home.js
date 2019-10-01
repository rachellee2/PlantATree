import React from 'react';
//import { Slide} from 'react-slideshow-image';
import ad1 from './images/ad1.JPG';
import ad2 from './images/ad2.JPG';
import ad3 from './images/ad3.JPG';
//import tree1 from './images/tree1.jpg';
import './css/homestyle.css';

// const slideImages = [
//     'images/nara.jpg',
//     'images/tree1.jpg',
//     'images/tree2.jpg'
// ];

// const properties = {
//     duration: 5000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: true,
//     arrows: true,
//     onChange: (oldIndex, newIndex) => {
//       console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//     }
// }


const Home = () => {
        return(
        // <div className="main-wrapper">
        //     <h2>This is Homepage</h2>
        //     <div className="slide-container">
        //     <Slide {...properties}>
        //         <div className="each-slide">
        //             <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
        //             <span>Slide 3</span>
        //             </div>
        //         </div>
        //         <div className="each-slide">
        //             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
        //                 <span>
        //                     Specials
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="each-slide">
        //             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
        //                 <span>
        //                     Tips
        //                 </span>
        //             </div>
        //         </div>
        //     </Slide>
        //     </div>
        // </div>

        <div className="container">        
            <div className="main-wrapper">
                <div className="main-featured">
                    <div className="sub1">
                    <h2>Advertisement</h2>
                        <a href="/Advertisement">
                            <img src={ad1} height="300px" width="900px"/>
                            </a>
                    </div>
                    <div className="sub2">
                        <h2>Specials</h2>
                        <a href="/Special">
                            <img src={ad2} height="300px" width="900px" /><link rel="https://www.paypal.com/in/signin"></link>
                        </a>
                    </div>
                    <div className="sub3">
                        <h2>Tips</h2>
                        <a href="/Tips">
                        <img src={ad3} height="300px" width="900px"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <center/>This is for footer
            </div>
         </div>

        )
    }

export default Home;