import React, { Component } from 'react';
// import {setCatsList} from '../../redux/reducer';
import axios from 'axios';
import './catbio.css';
import {Link} from 'react-router-dom';

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
        return ( 
            <div className="entire-catbio-page-container">
                <div className="header-container">
                </div>
                <h1>Adopt a cat</h1>
                <div className="catbio-left-and-right-side-container">
                    <div className="catbio-left-side-container">
                        <img className="catbio-cat-img" src={profile.img}/>
                    </div>
                    <div className="catbio-right-side-container"> 
                        <div className="catbio-info-text">
                            <h2 className="catbio-cat-name">{profile.name}</h2>
                            <h3 className="catbio-cat-age">{profile.age}</h3>
                                <div className="catbio-info-text-row">
                                    <h4 className="catbio-cat-gender">{profile.gender}&nbsp; · &nbsp;</h4>
                                    <h4 className="catbio-cat-color">{profile.color}&nbsp;   · &nbsp;</h4>
                                    <h4 className="catbio-cat-breed">{profile.breed}&nbsp;  · &nbsp;</h4>
                                    <h4 className="catbio-cat-type">{profile.type}</h4>
                                </div>
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
                <button className="admin-delete-btn"
                    onClick={() => this.handleDeleteCat(this.props.match.params.id)}>Delete</button>

                </div>
                    </div>
                </div>

                
            </div>
        );
    }
}
 
export default CatBio;