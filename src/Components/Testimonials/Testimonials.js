import React, { Component } from 'react';
import './testimonials.css';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    handleNameInput = (value) => {
        this.setState ({
            name: value
        })
    }
    render() { 
        return ( 
            <div>
                <div className="header-container"></div>
                <div className="meetazrain-under-header-content">
                    <h1>Testimonials</h1>
                    <div className="space-between-h1-and-h2"></div>
                    <h2 className="meet-az-rain-subtext">Read the stories of people who have found their forever friends through AZ Rain</h2>
                    <div className="space-between-header-and-content"></div>

                    <div className="testimonials-rows">
                        <div className="testimonials-img-and-text">
                            <div className="testimonial-jordan-img"></div>
                            <div className="testimonial-text">
                            <h5>Jordan & Archie</h5>
                            <h3>Found each other on 6 · 23 · 2015</h3>
                            <p>I am so glad I found AZ Rain because through it I found my best friend, Archie Utz. We do everything together and I can't imagine my life without him. He's back in Kentucky while I'm here in Phoenix so I can't wait to be reunited with him.</p>
                            </div>
                        </div>
                        <div className="testimonials-img-and-text">
                            <div className="testimonial-kaylin-img"></div>
                            <div className="testimonial-text">
                            <h5>Kaylin & Pookie</h5>
                            <h3>Found each other on 12 · 23 · 2017</h3>
                            <p>AZ Rain brought me to my bff Pookie. She gets along with my crazy dog so well. Pookie is the perfect addition to my family.</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
         );
    }
}
 
export default Testimonials;