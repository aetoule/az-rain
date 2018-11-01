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
            gender: '',
            type: '',
            color: '',
            breed: '',
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
                gender: res.data[0].gender,
                type: res.data[0].type,
                color: res.data[0].color,
                breed: res.data[0].breed,
                description: res.data[0].description  
            }              
        )
        }).catch(err => console.log('err', err));  
    }

    handleSaveEdits = (id, img, name, age, gender, type, color, breed, description) => {
        console.log('this.state is ', this.state);
        console.log(id, img, name, age, gender, type, color, breed, description)
        axios.put(`/api/cats/${id}`, {img, name, age, gender, type, color, breed, description}).then(res => {
            // TODO ADD REDIRECT HERE
            // window.location.replace('/adopt/catalog');
            window.location.href = '/adopt/catalog';
        }).catch(err => console.log('error ', err));
    }

    handleCancelEdits = () => {
        // window.location.pathname= `/adopt/catbio/${this.props.match.params.id}`;
        console.log(this.props);
        this.props.history.goBack();
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
        // console.log(this.state.profile);
        let {img, name, age, gender, type, color, breed, description} = this.state;
        let {profile} = this.state;
        const {login, logout, admin} = this.props;
        return ( 
            <div className="entire-adminEdit-page-container">
                <div className="header-container">
                </div>
                <h1>Edit {name}'s Information</h1>
                <img className="adminEdit-cat-img" src={img}/>
                <div className="adminEdit-text-area-container">
                    <div className="adminEdit-text-area"> 
                        <h2>Image URL:</h2>
                        <input className="adminEdit-input-box" type="text" value={img} onChange={(e) => this.handleChangeImg(e.target.value)} />
                        <h2>Name:</h2>
                        <input className="adminEdit-input-box" type="text" value={name} onChange={(e) => this.handleChangeName(e.target.value)} />
                        <h2>Age:</h2>
                        <input className="adminEdit-input-box" type="text" value={age} onChange={(e) => this.handleChangeAge(e.target.value)} />

                        <h2>Gender:</h2>
                        <input className="adminEdit-input-box" type="text" value={gender} onChange={(e) => this.handleChangeGender(e.target.value)} />
                        <h2>Type:</h2>
                        <input className="adminEdit-input-box" type="text" value={type} onChange={(e) => this.handleChangeType(e.target.value)} />
                        <h2>Color:</h2>
                        <input className="adminEdit-input-box" type="text" value={color} onChange={(e) => this.handleChangeColor(e.target.value)} />
                        <h2>Breed:</h2>
                        <input className="adminEdit-input-box" type="text" value={breed} onChange={(e) => this.handleChangeBreed(e.target.value)} />

                        <h2>Description:</h2>
                        {/* <p className="catbio-cat-description">{description}</p> */}
                        <textarea className="adminEdit-description-input-box" value={description} onChange={(e) => this.handleChangeDescription(e.target.value)} />
                    </div>
                </div>
                <div className="admin-edit-and-cancel-btn">
                    <button className="admin-cancel-btn"
                        onClick={() => this.handleCancelEdits(img, name, age, gender, type, color, breed, description)}>Cancel
                    </button>
                    <button className="admin-edit-btn"
                        onClick={() => this.handleSaveEdits(this.props.match.params.id, img, name, age, gender, type, color, breed, description)}>Save Changes
                    </button>
                    
                </div>
            </div>          
        );
    }
    
}

export default AdminEdit;


