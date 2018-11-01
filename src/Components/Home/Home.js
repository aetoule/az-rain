import React, { Component } from 'react';
import axios from 'axios';
// will probably remove login from this page
import {login} from '../../redux/reducer';
import './home.css';
import Header from '../Header/Header';
import firstCatImage from '../../media/james-sutton-705775-unsplash.jpg';
import secondCatImage from '../../media/eric-han-455080-unsplash.jpg';
import thirdCatImage from '../../media/archie1.jpg';
import { Link} from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }   
    }

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render() { 
        // const {login} = this.props;
        return ( 

            <div className="home-entire-page">
                <div className="home-header-container">
                    <div className="home-page-text-content">
                        <div className="space-between-header-and-content"></div>
                        <div className="space-between-header-and-content"></div>
                        <div className="space-between-header-and-content"></div>

                        <h1 className="h1-for-home-page">
                            Adopt your new</h1>
                        <h1 className="h1-for-home-page">
                            best friend</h1>
                        <Link to='/adopt/catalog'><button className="home-page-btn">Find a cat</button></Link>  
                    </div> 
                </div>
                <div className="home-section-2-container">
                    <div className="home-page-text-content-right">
                        <div className="space-between-header-and-content"></div>
                        <div className="space-between-header-and-content"></div>
                        <h1 className="h1-for-home-page-right">
                        Meet AZ RAIN</h1>
                        {/* <h1 className="h1-for-home-page-right">
                            best friend</h1> */}
                        <p className="p-for-home-page-right">Our mission is to rescue and adopt out the adoptable cats and educate the public on the care, safety, and need to have their pets spayed/neutered.</p>
                        <Link to='/about/meet_az_rain'><button className="home-page-btn-right">Learn More</button></Link>  
                    </div> 
                </div>
                <div className="home-section-3-container">
                    <div className="home-page-text-content">
                        <div className="space-between-header-and-content"></div>
                        <div className="space-between-header-and-content"></div>
                        <h1 className="h1-for-home-page">
                            Contact Us</h1>
                        <p className="p-for-home-page-left">Contact us to schedule a meeting with a cat, to surrender a cat, or even if you just feel like saying hi!</p>
                        <Link to='/about/contact'><button className="home-page-btn">Contact</button></Link>  
                    </div> 
                </div>
                <div className="home-section-4-container">
                    <div className="home-page-text-content-right">
                        <div className="space-between-header-and-content"></div>
                        <div className="space-between-header-and-content"></div>
                        <h1 className="h1-for-home-page-right">
                        Testimonials</h1>
                        {/* <h1 className="h1-for-home-page-right">
                            best friend</h1> */}
                        <p className="p-for-home-page-right">See the stories from those who have adopted through AZ Rain and have found their forever friends.</p>
                        <Link to='/about/testimonials'><button className="home-page-btn-testimonials">Read Testimonials</button></Link>  
                    </div> 
                </div>
            </div>






            // <div>
            //     {/* <button onClick={login}>Admin Login</button> */}
            //     <div className= "landingOne">
            //         {/* <img className="homepage-img" src={firstCatImage}></img> */}
            //         <div className="left-side1-container">
            //             <h1 className="left-side1">
            //                 Adopt your new
            //             </h1>
            //             <h1 className="left-side12">best friend
            //             </h1>   
            //             <Link to='/adopt/catalog'><button className="left-side1-btn">Find a cat</button></Link>  
            //         </div>
                    
            //     </div>
            //     <div className= "landingTwo">
            //         <img className="homepage-img" src={secondCatImage}></img>
            //         <div className="right-side-container"> 
            //             <h1 className="right-align-h1">Meet AZ Rain</h1>
            //             <p className="right-side-p-text">Our mission is to rescue and adopt out the adoptable cats and educate the public on the care, safety, and need to have their pets spayed/neutered.
            //             </p>
            //             <Link to='/about'><button className="right-side1-btn">Learn More</button></Link>
            //         </div>
                    
            //     </div>
            //     <div className= "landingThree">
            //         <img className="homepage-img" src={thirdCatImage}></img>
            //         <div className="left-side2">
            //             <h1 className="left-align-text2">How can you help?</h1>
            //             <p className="donate-text">RAIN is always looking for people to help in a variety of ways. If you are interested in helping check here to see how you can help.
            //             </p>
            //             <Link to='/adopt'><button className="left-side2-btn">Donate</button></Link>
            //         </div>
                    
            //     </div>

            // </div>
         );
    }
}
 
export default Home;