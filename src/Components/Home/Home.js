import React, { Component } from 'react';
import axios from 'axios';
// will probably remove login from this page
import {login} from '../../redux/reducer';
import './home.css';
import Header from '../Header/Header';
import firstCatImage from '../../media/james-sutton-705775-unsplash.jpg';
import secondCatImage from '../../media/eric-han-455080-unsplash.jpg';
import thirdCatImage from '../../media/archie1.jpg';
import { Link, withRouter } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // const {login} = this.props;
        return ( 
            <div>
                {/* <button onClick={login}>Admin Login</button> */}
                <div className= "landingOne">
                    <img  src={firstCatImage}></img>
                    <div className="left-side1">
                        <h1>
                            <div>Adopt your new</div>
                            <div>best friend</div>
                        </h1>
                    </div>
                    <Link to='/adopt'><button className="left-side1-btn">Find a cat</button></Link>
                </div>
                <div className= "landingTwo">
                    <img  src={secondCatImage}></img>
                    <div className="right-side"> 
                        <h1 className="right-align-text">Meet AZ Rain</h1>
                        <p>Our mission is to rescue and adopt out the adoptable cats and educate the public on the care, safety, and need to have their pets spayed/neutered.
                        </p>
                        <Link to='/about'><button className="right-side1-btn">Learn More</button></Link>
                    </div>
                    
                </div>
                <div className= "landingThree">
                    <img  src={thirdCatImage}></img>
                    <div className="left-side2">
                        <h1>How can you help?</h1>
                        <p className="donate-text">RAIN is always looking for people to help in a variety of ways. If you are interested in helping check here to see how you can help.
                        </p>
                        <Link to='/adopt'><button className="left-side2-btn">Donate</button></Link>
                    </div>
                    
                </div>

            </div>
         );
    }
}
 
export default Home;