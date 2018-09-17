import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import hamburgerMenu from '../../media/noun_hamburger menu_549978.svg';
import whitecatlogo from '../../media/whitecatlogo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggle: false
         }
    }

    render() { 
        console.log(this.state.toggle);
        console.log(hamburgerMenu)
        return ( 
            <header>
                <div className="logo-content">
                    <img className="white-cat-logo" src={whitecatlogo}/>
                    <li className="logo"><Link className="link" to= "/"> AZ RAIN</Link></li>
                </div>

                <div> <img className='menu-button' src={hamburgerMenu} onClick={() => this.setState({toggle: !this.state.toggle})}/> </div>
                    <nav className={this.state.toggle ? 'show' : ''}>
                        
                        <ul className="dropdown">
                            <li>Adopt
                                <ul className="dropdown-content space">
                                    <li className="space"><Link className="space" to= "/adopt/catalog">{`\u{1f431}`} Cats / Kittens</Link></li>
                                    <li className="space"><Link className="space" to= "/adopt/application">{`\u{1f431}`} Cat Adoption Application Form</Link></li>
                                </ul>
                            </li>
                            <li><Link className="link" to= "/about"> About</Link></li>
                            <li>Help RAIN
                                <ul className="dropdown-content2 space">
                                    <li className="space"><Link className="space" to= "/help_rain/meet_az_rain">{`\u{1f431}`} Meet AZ Rain</Link></li>
                                    <li className="space"><Link className="space" to= "/help_rain/contact">{`\u{1f431}`} Contact</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
        </header>
         );
    }
}
 
export default Header;
