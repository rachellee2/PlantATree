import React from 'react';
import acer from './images/acer.jpg';
import nara from './images/nara.jpg';
import bluespruce from './images/bluespruce.jpg';
import pinyonpine from './images/pinyonpine.jpg';
import './css/tips.css';

const Tips = () => {
        return(
            <div className="container">
                <div className="main-wrapper">
                    <div className="tips-wrapper">
                        <img src={acer}/>
                            <h2>Evergreen Trees</h2>
                            <strong>Description:</strong>
                            In botany, an evergreen is a plant that has leaves throughout the year that are always green. 
                            This is true even if the plant retains its foliage only in warm climates, and contrasts with deciduous plants,
                            which completely lose their foliage during the winter or dry season.
                    </div>
                    <div className="tips-wrapper">
                        <img src={nara}/>
                            <strong>Nara Tree</strong><br/>
                            <strong>Description:</strong><br/>
                            It is very easily propagated from seed or large stem cuttings, but suffers from disease problems. For large scale production of seedlings,
                            seeds are usually collected during months of July and are planted in plant nurseries.<br/>
                            Knowing the Narra’s uses and beauty, we would now appreciate why it was chosen to be our national tree. It is not just a majestic and straight tree, 
                            but also a medicinal plant, an important shade tree, and ecologically important as a nitrogen fixer for soils and habitat for birds, insects and small tree climbing mammals.
                    </div>
                    <div className="tips-wrapper">
                        <img src={bluespruce}/>
                            <strong>Blue Spruce</strong><br/>
                            <strong>Description:</strong><br/>
                            A Blue Spruce is the classic specimen tree for cooler regions, but a tree that can reach 100 feet is not ideal for everyone!
                            If you could get that classic silver-blue foliage and perfect symmetry in a small tree, wouldn’t you jump at the chance? Well, Baby Blue is here to give satisfaction.
                            The perfect miniature Blue Spruce, this great dwarf form fits into small lawns as well as garden beds and corners around your house. 
                            If you live in colder regions, then this is the ideal plant for that stand-out specimen that will bring character and color to your garden.
                    </div>
                    <div className="tips-wrapper">
                        <img src={pinyonpine}/>
                            <strong>Pinyon Pine</strong><br/>
                            <strong>Description:</strong><br/>
                            Pinyon pine grows yellow-green needles, about 2 inches long, that remain on the tree for some 8 or 9 years. The cones are small and resemble brown roses. 
                            Inside the cones you will find the treasured pine nuts, so it is no surprise that it is also written “pinon,” meaning pine nut in Spanish.
                            The pinyon pine is not a fast growing tree. It grows slowly and steadily, developing a crown almost as wide as the tree is tall. 
                            After some 60 years growth, the tree might be 6 or 7 feet high. Pinyon pines can live long lives, even exceeding 600 years.
                    </div>
                </div>
                <div className="footer">
                    <center/>This is for footer
                </div>
            </div>
        )
    }

export default Tips;