import React, { Component } from 'react';
// import {setCatsList} from '../../redux/reducer';
import axios from 'axios';
import './adminEdit.css';
import {login, logout} from '../../redux/reducer';
import {Link} from 'react-router-dom';

class AdminEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img: '',
            name: '',
            age: 0,
            description:''      
         }
    }
    componentDidMount() {
        console.log('fired');
        
        axios.get(`/api/cats/${this.props.match.params.id}`).then(res => {
            console.log(res);
            
            this.setState({
                img: res.data[0].img,
                name: res.data[0].name,
                age: res.data[0].age,
                description: res.data[0].description  
            }
                
        )
        }).catch(err => console.log('err', err));  
    }
    handleSaveEdits = (id, img, name, age, description) => {
        axios.put(`/api/cats/${id}`, {img, name, age, description}).then(res => {
            // TODO ADD REDIRECT HERE FFS
            window.location.replace('/adopt/catalog')
        }).catch(err => console.log('error ', err));
    }

    handleChangeImg = value => {
        this.setState ({
            img: value
        })  
    }

    handleChangeName = value => {
        this.setState ({
            name: value
        })  
    }

    handleChangeAge = value => {
        this.setState ({
            age: value
        })  
    }

    handleChangeDescription = value => {
        this.setState ({
            description: value
        })  
    }

    render() { 
        console.log(this.state.profile);
        let {img, name, age, description} = this.state;
        // let {profile} = this.state;
        const {login, logout, admin} = this.props;
        return ( 
            <div className="entire-adminEdit-page-container">
                {/* <div className="couch-cat"> */}
                <div className="header-container">
                    <h1 className="adopt-title-text">Adopt a cat</h1>
                </div>
                <img className="catbio-cat-img" src={img}/>
                <input type="text" value={img} onChange={(e) => this.handleChangeImg(e.target.value)} />

                <div className="text-area"> 
                    <h1>Name:</h1>
                    <h1 className="catbio-cat-name">{name}</h1>
                    <input type="text" value={name} onChange={(e) => this.handleChangeName(e.target.value)} />

                    <h2>Age:</h2>
                    <h2 className="catbio-cat-age">{age}</h2>
                    <input type="text" value={age} onChange={(e) => this.handleChangeAge(e.target.value)} />

                    <p>Description:</p>
                    {/* <p className="catbio-cat-description">{description}</p> */}
                    <textarea value={description} onChange={(e) => this.handleChangeDescription(e.target.value)} />

                    <button className="admin-edit-btn"
                    onClick={() => this.handleSaveEdits(this.props.match.params.id, img, name, age, description)}>Save</button>

                </div>
            </div>          
        );
    }
    
}

export default AdminEdit;


