import React, { Component } from 'react';
import axios from 'axios';
import {login} from '../../redux/reducer';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // const {login} = this.props;
        return ( 
            <div>
                Home
                <nav>
                    <ul>
                        <li><Link to= "/adopt"> Adopt</Link>
                            <ul>
                                <li><Link to= "/adopt">{`\u{1f431}`} Cats / Kittens</Link></li>
                                <li><Link to= "/adopt">{`\u{1f431}`} Cat Adoption Application Form</Link></li>
                            </ul>
                        </li>
                        <li><Link to= "/about"> About</Link></li>
                        <li><Link to= "/helprain"> Help RAIN</Link>
                            <ul>
                                <li><Link to= "/about">{`\u{1f431}`} Meet AZ Rain</Link></li>
                                <li><Link to= "/about">{`\u{1f431}`} Contact</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* <button onClick={login}>Admin Login</button> */}

            </div>
         );
    }
}
 
export default Home;