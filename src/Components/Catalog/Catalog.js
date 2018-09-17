import React, { Component } from 'react';
import axios from 'axios';
import {setCatsList} from '../../redux/reducer';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import './catalog.css';
import couchcat from '../../media/tucker-good-499943-unsplash.jpg';
import {Link} from 'react-router-dom';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        axios.get('/api/cats').then(res => {
            console.log(res.data);
            
            this.props.setCatsList(res.data)
        }).catch(err => console.log('err', err));  
    }
    
    render() { 
        const {catsList} = this.props;
        console.log(catsList);
        
        let mappedList = catsList.map((cat, i) => {
            return (
                <Link to ="/adopt/cat_bio"><div className="row">
                    <div className="mapped-cat-list" key={i}>
                        <img className="cat-img" src={cat.img}/>
                        <p className="cat-name">{cat.name}</p> 
                        <p className="cat-age">{cat.age}</p> 
                    {/* <button onClick={() => props.deleteHouse(house.id)}>Delete</button> */}
                    
                    </div>
                </div></Link>
                )
            
        })
        
        return ( 
            <div>
                <img className="couch-cat" src={couchcat}/>
                <h1 className="adopt-title-text">Adopt a cat</h1>
                <Header />
                
                <h2 className="filter-search">Filter your search</h2>
                <div className="filter-search-container">

                </div>
                {mappedList}
            </div>
         );
    }
}


const mapStateToProps = state => {
    const {catsList} = state;
    console.log(state);
    return {
        catsList
    }
}

export default connect (mapStateToProps, {setCatsList}) (Catalog);
