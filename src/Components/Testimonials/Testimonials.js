import React, { Component } from 'react';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Testimonials</h1>
                <div className="testimonials-img-and-text">
                    <div className="person-img"></div>
                    <div className="testimonial-text">
                    <p>I am so glad I found AZ Rain because through it I found my best friend, Pookie.</p>
                    </div>
                </div>
                <div className="testimonials-img-and-text">
                    <div className="person-img"></div>
                    <div className="testimonial-text">
                    <p>I am so glad I found AZ Rain because through it I found my best friend, Pookie.</p>
                    </div>
                </div>


            </div>
         );
    }
}
 
export default Testimonials;