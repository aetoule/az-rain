import React, { Component } from 'react';
// import {setCatsList} from '../../redux/reducer';
import axios from 'axios';
import './adminAdd.css';
import {login, logout} from '../../redux/reducer';
import {Link} from 'react-router-dom';


class AdminAdd extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            img: '',
            name: '',
            age: 0,
            gender: '',
            type: '',
            color: '',
            breed: '',
            description:''       
        }
    }
    componentDidMount() {
        console.log('fired');        
    }

    handleCancel = () => {
        this.setState ({
            img: '',
            name: '',
            age: 0,
            gender: '',
            type: '',
            color: '',
            breed: '',
            description:'' 
        })
        window.location.replace('/adopt/catalog')
    }
    handleAddCat = (img, name, age, gender, type, color, breed, description) => {
        console.log('whats in', this.state);
        axios.post(`/api/cats`, {img, name, age, gender, type, color, breed, description}).then(res => {
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

    handleChangeGender = value => {
        this.setState ({
            gender: value
        })  
    }
    handleChangeType = value => {
        this.setState ({
            type: value
        })  
    }
    handleChangeColor = value => {
        this.setState ({
            color: value
        })  
    }
    handleChangeBreed = value => {
        this.setState ({
            breed: value
        })  
    }

    handleChangeDescription = value => {
        this.setState ({
            description: value
        })  
    }

    render() { 
        console.log(this.state.profile);
        let {img, name, age, gender, type, color, breed, description} = this.state;
        // let {profile} = this.state;
        const {login, logout, admin} = this.props;
        return ( 
            <div className="entire-adminEdit-page-container">
                {/* <div className="couch-cat"> */}
                <div className="header-container">           
                </div>
                <h1>Adopt a cat</h1>
                <img className="catbio-cat-img" src={img}/>
                <input type="text" value={img} onChange={(e) => this.handleChangeImg(e.target.value)} />

                <div className="text-area"> 
                    <h2>Name:</h2>
                    {/* <h1 className="catbio-cat-name">{name}</h1> */}
                    <input type="text" value={name} onChange={(e) => this.handleChangeName(e.target.value)} />

                    <h2>Age:</h2>
                    {/* <h2 className="catbio-cat-age">{age}</h2> */}
                    <input type="text" value={age} onChange={(e) => this.handleChangeAge(e.target.value)} />

                    <h2>Gender:</h2>
                    <input type="text" value={gender} onChange={(e) => this.handleChangeGender(e.target.value)} />
                    <h2>Type:</h2>
                    <input type="text" value={type} onChange={(e) => this.handleChangeType(e.target.value)} />
                    <h2>Color:</h2>
                    <input type="text" value={color} onChange={(e) => this.handleChangeColor(e.target.value)} />
                    <h2>Breed:</h2>
                    <input type="text" value={breed} onChange={(e) => this.handleChangeBreed(e.target.value)} />


                    <h2>Description:</h2>
                    {/* <p className="catbio-cat-description">{description}</p> */}
                    <textarea value={description} onChange={(e) => this.handleChangeDescription(e.target.value)} />

                    <button className="admin-delete-btn"
                    onClick={() => this.handleCancel(img, name, age, gender, type, color, breed, description)}>Cancel</button>

                    <button className="admin-edit-btn"
                    onClick={() => this.handleAddCat(img, name, age, gender, type, color, breed, description)}>Add</button>

                </div>
            </div>          
        );
    }
}
    
    
    
    
export default AdminAdd;