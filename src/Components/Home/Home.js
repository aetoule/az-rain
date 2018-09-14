import React, { Component } from 'react';
import axios from 'axios';
import {login} from '../../redux/reducer';
import { Link } from 'react-router-dom';
import './home.css';
import firstCatImage from '../../media/james-sutton-705775-unsplash.jpg';
import secondCatImage from '../../media/eric-han-455080-unsplash.jpg';
import thirdCatImage from '../../media/archie1.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // const {login} = this.props;
        return ( 
            <div>
                <li className="logo"><Link className="link" to= "/"> AZ RAIN</Link></li>
                <nav>
                    <ul className="dropdown">
                        <li><Link className="link" to= "/adopt"> Adopt</Link>
                            <ul className="dropdown-content space">
                                <li className="space"><Link className="link" to= "/adopt/catalog">{`\u{1f431}`} Cats / Kittens</Link></li>
                                <li className="space"><Link className="link" to= "/adopt/application">{`\u{1f431}`} Cat Adoption Application Form</Link></li>
                            </ul>
                        </li>
                        <li><Link className="link" to= "/about"> About</Link></li>
                        <li><Link className="link" to= "/help_rain"> Help RAIN</Link>
                            <ul className="dropdown-content2 space">
                                <li className="space"><Link className="link" to= "/help_rain/meet_az_rain">{`\u{1f431}`} Meet AZ Rain</Link></li>
                                <li className="space"><Link className="link" to= "/help_rain/contact">{`\u{1f431}`} Contact</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* <button onClick={login}>Admin Login</button> */}
                <div className= "landingOne">
                    <img  src={firstCatImage}></img>
                    <div className="left-side1">
                        <h1>Adopt your new</h1>
                        <h1>best friend</h1>
                    </div>
                    <button>Find a cat</button>
                </div>
                <div className= "landingTwo">
                    <img  src={secondCatImage}></img>
                    <div className="right-side"> 
                        <h1>Meet AZ Rain</h1>
                    </div>
                    <button>Find a cat</button>
                </div>
                <div className= "landingThree">
                    <img  src={thirdCatImage}></img>
                    <div className="left-side2">
                        <h1>How can you help?</h1>
                    </div>
                    <button>Find a cat</button>
                </div>

            </div>
         );
    }
}
 
export default Home;