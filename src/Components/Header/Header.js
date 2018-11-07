import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import hamburgerMenu from '../../media/pink_menu_icon@3x.svg';
import whitecatlogo from '../../media/SVG/noArtboardWhiteKittyLogo.svg';

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
                    <Link className="link" to= "/">
                        <div className="white-cat-logo">
                        </div>
                    </Link>
                        <li className="logo"><Link className="link" to= "/"> AZ RAIN</Link>
                        </li>
                </div>
                <div> <img className='menu-button' src={hamburgerMenu} onClick={() => this.setState({toggle: !this.state.toggle})}/> </div>
                    <nav className={this.state.toggle ? 'show' : ''}>
                        <ul className="dropdown">
                            <li className="header-main-list"><Link to= "/adopt/catalog">Adopt</Link>
                            </li>
                            <li className="header-main-list"><Link to= "/about/meet_az_rain">About</Link>
                            </li>
                            <li className="header-main-list"><Link to= "/about/contact">Contact</Link>
                            </li>
                            <li className="header-main-list"><Link to= "/about/testimonials">Testimonials</Link>
                            </li>
                            <li className="header-main-list"><a href="https://www.paypal.com/fundraiser/107534599428512963/charity/105430">Donate</a>
                            </li>
                        </ul>
                    </nav>
        </header>
         );
    }
}
 
export default Header;
