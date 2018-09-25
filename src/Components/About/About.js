import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const instafeedTarget = 'instafeed';
        return ( 
            <div>   
                <div id={instafeedTarget}>
                    <Instafeed
                        limit='5'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-recent'
                        target={instafeedTarget}
                        // template=''
                        userId='azraincats'
                        clientId='90890eee8b2f41688a6377a925efa561'
                        // accessToken='accessTokenInstagramApiString'
                    />
                </div>
                {/* <div id="pixlee_container"></div><script type="text/javascript">window.PixleeAsyncInit = function() {Pixlee.init({apiKey:'qfwlsDTUqsxmiaCvd8c'});Pixlee.addSimpleWidget({widgetId:'9313'});};</script><script src="//instafeed.assets.pixlee.com/assets/pixlee_widget_1_0_0.js"></script> */}
            </div>
         );
    }
}
 
export default About;