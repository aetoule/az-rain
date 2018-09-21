import React, { Component } from 'react';
// import {setCatsList} from '../../redux/reducer';
import axios from 'axios';
import './catbio.css';
import {login, logout} from '../../redux/reducer';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

class CatBio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            profile:[]
         }
    }
    componentDidMount() {
        axios.get(`/api/cats/${this.props.match.params.id}`).then(res => {
            console.log(res);
            
            this.setState({
                profile: (res.data[0])
            }
                
        )
        }).catch(err => console.log('err', err));  
    }

    handleDeleteCat = id => {
        axios.delete(`/api/cats/${this.props.match.params.id}`).then(res => {
            console.log(res)
            window.location.replace('/adopt/catalog')
        }).catch(err => ('error deleting', err))
    }
    render() { 
        console.log(this.state.profile);
        let {profile} = this.state;
        const {login, logout, admin} = this.props;
        return ( 
            <div className="entire-catbio-page-container">
                {/* <div className="couch-cat"> */}
                <div className="header-container">
                    <h1 className="adopt-title-text">Adopt a cat</h1>
                </div>
                <img className="catbio-cat-img" src={profile.img}/>
                <div className="text-area"> 
                    <h1 className="catbio-cat-name">{profile.name}</h1>
                    <h2 className="catbio-cat-age">{profile.age}</h2>
                    <p className="catbio-cat-description">{profile.description}</p>
                </div>

                <div className= "admin-edit-button">
                {/* { admin 
                    ?
                    <div>
                        <Link to='/catbio/edit'><button className="admin-edit-btn">Edit</button></Link>
                    </div>
                    : <div></div>
                } */}

                <Link to={`/catbio/edit/${profile.id}`}><button className="admin-edit-btn">Edit</button></Link>
                <button className="admin-edit-btn"
                    onClick={() => this.handleDeleteCat(this.props.match.params.id)}>Delete</button>

                </div>
            </div>
        );
    }
}
 
export default CatBio;