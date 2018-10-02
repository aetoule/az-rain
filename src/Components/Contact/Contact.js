import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import axios from 'axios';
import './contact.css';
import phoneIcon from '../../media/pinkphoneIcon.svg';
import emailIcon from '../../media/pinkemailIcon.svg';
import mailboxIcon from '../../media/pinkmailboxIcon.svg';


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
            url:"http://az-rain.com/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                return () => {
                    console.log("closures rule")
                    this.setState ({ 
                        name: '',
                        email: '',
                        message: ''
                    })
                    // document.getElementById("contact-form").reset();
                }
                // this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
        
    }

    // resetForm(){
    //     document.getElementById('contact-form').reset();
    // }

    render() {
    const style = {
        height: '50vh',
        width: '50vw',
        // top: '40%',

        // z-index: 3;
        position: 'absolute',
        padding: '0px',
        // border-width: '0px',
        margin: '40px',
        left: '0px',
        top: '-150px',
    } 
    const {name, email, message} = this.state;

    return (
        <div className="contact-entire-page">
            <div className="header-container"></div>
            <h1>Contact</h1>

            <div className="contact-left-and-right-container">
                <div className="contact-left-column">
                    <form id="contact-form">
                        <h2>Contact Form</h2>
                        <h2>Name</h2>
                        <input id="name" type="text" value={name} placeholder="Hairy Potter" onChange={(e) => this.handleNameInput(e.target.value)} />
                        <h2>Email</h2>
                        <input id="email" type="text" value={email} placeholder="fluffy@gmail.com" onChange={(e) => this.handleEmailInput(e.target.value)} />
                        <h2>Message</h2>
                        <input id="message" type="text" value={message}
                        placeholder="Hi, my name is Fluffy and I am looking to adopt a cat." onChange={(e) => this.handleMessageInput(e.target.value)} />
                    </form>
                    <button className="contact-submit-btn" onClick={(e) => this.handleSubmit(e)}>Send Message</button>
                </div>
                <div className="contact-right-column">
                    <h2>How to reach us</h2>
                    <div className="contact-container-icon-text">
                        <div className="contact-icon-and-text">
                            <img className="contact-icons" src={phoneIcon}></img>
                            <p className="contact-text">614-385-2868</p>
                        </div>
                        <div className="contact-icon-and-text">
                            <img className="contact-icons" src={emailIcon}></img>
                            <p className="contact-text">azraincats@gmail.com</p>
                        </div>
                        <div className="contact-icon-and-text">
                        <img className="contact-icons" src={mailboxIcon}></img>
                            <ul>
                                <p className="contact-text">PO Box 2006</p>
                                
                                <p className="contact-text">Chandler, AZ. 85224</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h2 className="google-maps-title-text">Find us here</h2> */}

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