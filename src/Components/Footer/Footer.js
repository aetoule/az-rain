import React, { Component } from 'react';
import './footer.css';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {login, logout} from '../../redux/reducer';
import axios from 'axios';

class Footer extends Component {

    componentDidMount() {
        axios.get('/api/admin-data').then(response => {
            const admin = response.data;
            console.log(admin);
            this.props.login(admin);
        })
    }

    logOut() {
        console.log('fired');
        
        axios.post('/api/logout')
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => console.log('Err in logOut', err))
    }

    render() {
        const { admin, login, logout } = this.props;

        return ( 
            <div className="footer-content">
                <p className="footer-text">developed and designed by <br></br>aisha toulegenova</p>
                {/* logout button for admins. display only if admin is true */}
                { admin 
                    &&
                    <div>
                        <button className="logout-btn"
                        onClick={this.logOut}>Log out</button>
                    </div>
                }
                
                {/* <button className="logout-btn"
                onClick={this.logOut}>Log out</button> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {admin} = state;
    return {
        admin
    }
}

const mapDispatchToProps = {
    login,
    logout
}

export default connect (mapStateToProps, mapDispatchToProps) (withRouter(Footer));