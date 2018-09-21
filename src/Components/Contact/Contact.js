import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import './contact.css';

export class Contact extends Component {
  render() {
    const style = {
        height: '40vh',
        width: '50vw',
        top: '50%'
    }   
    return (
        <div>
            <div className="outside-map-container">
                <div className="map-container">

                    <Map google={this.props.google} zoom={14}
                    initialCenter={{
                        lat: 33.307911,
                        lng: -111.890841
                    }}
                    style={style}>
            
        
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
            
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        {/* <h1>{this.state.selectedPlace.name}</h1> */}
                        </div>
                    </InfoWindow>
                    </Map>
                </div>
            </div>
        </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCeKynEDmv_Kwdn3fQJZ1K2ORAyfSgaRxE')
})(Contact)