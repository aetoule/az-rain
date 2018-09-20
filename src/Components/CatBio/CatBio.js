import React, { Component } from 'react';
// import {setCatsList} from '../../redux/reducer';
import axios from 'axios';
import './catbio.css';
import couchcat from '../../media/copytucker-good-499943-unsplash copy.jpg';

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
    render() { 
        console.log(this.state.profile);
        let {profile} = this.state;
        return ( 
            <div>
                <img className="couch-cat" src={couchcat}/>
                <img className="catbio-cat-img" src={profile.img}/>
                <div className="text-area"> 
                    <h1 className="catbio-cat-name">{profile.name}</h1>
                    <h2 className="catbio-cat-age">{profile.age}</h2>
                    <p className="catbio-cat-description">{profile.description}</p>
                </div>
            </div>
        );
    }
}
 
export default CatBio;