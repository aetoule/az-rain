import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
// import './contact.css';
import axios from 'axios';

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            message: ''
        }
    }

    handleNameInput = (value) => {
        this.setState ({
            name: value
        })
    }

    handleEmailInput = (value) => {
        this.setState ({
            email: value
        })
    }

    handleMessageInput = (value) => {
        this.setState ({
            message: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3001/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
    const style = {
        height: '40vh',
        width: '50vw',
        top: '50%'
    } 
    const {name, email, message} = this.state;

    return (
        <div>
            <form id="contact-form">
                <h1>Contact Form</h1>
                <h2>Name</h2>
                <input id="name" type="text" value={name} onChange={(e) => this.handleNameInput(e.target.value)} />
                <h2>Email</h2>
                <input id="email" type="text" value={email} onChange={(e) => this.handleEmailInput(e.target.value)} />
                <h2>Message</h2>
                <input id="message" type="text" value={message} onChange={(e) => this.handleMessageInput(e.target.value)} />
                <button className="contact-submit-btn" onClick={(e) => this.handleSubmit(e)}>Submit</button>
            </form>
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