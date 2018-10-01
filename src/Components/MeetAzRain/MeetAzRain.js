import React, { Component } from 'react';
import './meetazrain.css';
import ReactDOM from 'react-dom';


export default class MeetAzRain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        window.scroll(0,0);

        
    }
    render() { 
        return ( 
            <div>
                <div className="header-container"></div>
                <div className="meetazrain-under-header-content">
                    <h1>We Are R.A.I.N</h1>
                    <h2 className="meet-az-rain-subtext">(Rescuing Animals In Need)</h2>
                    <div className="space-between-header-and-content"></div>

                    <div className="meet-wayne">
                        <div className="wayne-img"></div>
                        <div className="wayne-text-details">
                            <h5>Meet Wayne Miller</h5>
                            <h3>The Founder of RAIN</h3>
                            <p>His passion is to educate people about statistics and saving lives. He would like to let people know that every adoption saves TWO lives; the one that you adopt and the one we can put into a Foster home. His dream is to someday have a place where he can house many abandoned or homeless animals, keeping them safe until a forever home is found for them.</p>
                        </div>
                    </div>
                    <div className="space-between-sections"></div>
                    <div className="azrain-goals">
                        <div className="goals-left-section-container">
                            <div className="goals-text-content">
                                <h5>Our Goals</h5>
                                <ul>
                                    <p className="goal-bullets">{`\u{1f431}`} Save as many cat lives as possible</p>
                                    <p className="goal-bullets">{`\u{1f431}`} Raise enough money to have a shelter in the East Valley.</p>
                                </ul>
                            </div>
                        </div>
                        <div className="goals-right-section">
                            <p className="goals-mission-text">R.A.I.N. Rescue’s mission is to rescue and adopt out the adoptable cats and dogs, and educate the public on the care, safety, and need to have their pets spayed/neutered.
                            </p>
                        </div>
                    </div>
                <div className="space-between-sections"></div>
            </div>
            </div>
         );
    }
}
