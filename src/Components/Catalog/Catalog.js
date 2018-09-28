import React, { Component } from 'react';
import axios from 'axios';
import {setCatsList} from '../../redux/reducer';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import './catalog.css';
import headercat from '../../media/patrick-brinksma-580128-unsplash.jpg';
import filterIcon from '../../media/noun_filters_1245150.svg'
import {Link} from 'react-router-dom';


class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gender: '',
            type: '',
            breed: '',
            filteredList: [],
            filtered: false
        }
    }
    componentDidMount() {
        axios.get('/api/cats').then(res => {
            console.log(res.data);
            
            this.props.setCatsList(res.data)
        }).catch(err => console.log('err', err));  
    }

    handleGender = (value) => {
        console.log(value);
        this.setState({
            gender: value    
        })
    }

    handleType = (value) => {
        console.log(value);
        this.setState({
            type: value
        })
    }

    handleBreed = (value) => {
        console.log(value);
        this.setState({
            breed: value
        })
    }

    // filter thru cat list based on whats in state at the time.
    handleSubmit = () => {
        let filteredList = this.props.catsList.filter((cat) => {
            console.log('entered filteredList',this.state)
            if (this.state.gender !== '' && this.state.type !== '' && this.state.breed !== '') {
                if (cat.gender == this.state.gender && cat.type == this.state.type && cat.breed == this.state.breed) {
                    console.log('first if')
                    return cat
                }
            }
            else if (this.state.gender !== '' && this.state.type !== '') {
                if (cat.gender == this.state.gender && cat.type == this.state.type) {
                    console.log('second if')
                    return cat
                }
            } else {
                if(cat.gender == this.state.gender) {
                    console.log('third if')
                    return cat
                } else if (cat.type == this.state.type) {
                    console.log('fourth if')
                    return cat
                }         
            } 
        })


        // let filteredList = this.props.catsList.filter((cat) => {
        //     console.log('entered filteredList',this.state)
        //     switch(cat) {
        //         case cat.gender == this.state.gender && cat.type == this.state.type && cat.breed == this.state.breed:
        //             console.log('first if')
        //             return {cat}
        //         case cat.gender == this.state.gender && cat.type == this.state.type:
        //         console.log('second if')
        //             return {cat}
        //         case cat.gender == this.state.gender:
        //         console.log('third if')
        //             return {cat}
        //         case cat.type == this.state.type:
        //         console.log('fourth if')
        //             return {cat}
        //         case cat.breed == this.state.breed:
        //         console.log('fourth if')
        //                 return {cat}
        //         default:
        //         console.log("no kitties")
        //     }                
        // })
        console.log(filteredList);
    
        this.setState({
            filteredList: filteredList,
            filtered: true
        })    
        // return this.handleReset;
    }

    handleReset = () => {
        this.setState({
            gender: '',
            type: '',
            breed: '',
            filteredList: [],
            filtered: false
        })
    }

    render() { 
        console.log(this.state);
        const {catsList} = this.props;
        console.log(catsList);
        let filterList = this.state.filteredList.map((cat, i) => {
            return (
                <Link to ={`/adopt/cat_bio/${cat.id}`}><div className="row">
                    <div className="mapped-cat-list" key={i}>
                        <img className="cat-img" src={cat.img}/>
                        <p className="cat-name">{cat.name}</p> 
                        <p className="cat-age">{cat.age}</p> 
                    {/* <button onClick={() => props.deleteHouse(house.id)}>Delete</button> */}
                    
                    </div>
                </div></Link>
            )
        })

        let mappedList = catsList.map((cat, i) => {
            return (
                <Link to ={`/adopt/cat_bio/${cat.id}`}>
                    <div className="mapped-cat-list" key={i}>
                        <img className="cat-img" src={cat.img}/>
                        <p className="cat-name">{cat.name}</p> 
                        <p className="cat-age">{cat.age}</p> 
                    {/* <button onClick={() => props.deleteHouse(house.id)}>Delete</button> */}                   
                    </div>
               </Link>
            )
        })
        return ( 
            <div>
                <img className="header-background-img-cat" src={headercat}/>
                <h1 className="adopt-title-text-catalog">Adopt a cat</h1>
                   
                {/* filter thru cat list */}
                <div className="filter-container">
                    <div className="filter-text-and-icon-container">
                        <img className="filter-icon" src={filterIcon}></img>
                        <h2 className="filter-search-text">Filter your search</h2>
                    </div>
                    <div className="three-filter-container">
                        {/* filter by gender */}
                        <div className="stv-radio-buttons-wrapper">
                            <input type="radio" className="stv-radio-button" 
                            onClick={(event) => this.handleGender(event.target.value)} name="radioButtonTest" value="F" id="button1" />
                            <label for="button1">Female</label>
                            <input type="radio" className="stv-radio-button" 
                            onClick={(event) => this.handleGender(event.target.value)}name="radioButtonTest" value="M" id="button2" />
                            <label for="button2">Male</label>
                        </div>
                        {/* filter by type of cat */}
                        <div className="stv-radio-buttons-wrapper2">
                            <input type="radio" className="stv-radio-button" 
                            onClick={(event) => this.handleType(event.target.value)} name="radioButtonTest" value="Kitten" id="button3" />
                            <label for="button3">Kitten</label>
                            <input type="radio" className="stv-radio-button" 
                            onClick={(event) => this.handleType(event.target.value)}name="radioButtonTest" value="Cat" id="button4" />
                            <label for="button4">Cat</label>
                        </div>
                        {/* filter by breed */}
                        <div className="stv-radio-buttons-wrapper3">
                            <input type="radio" className="stv-radio-button" 
                            onClick={(event) => this.handleBreed(event.target.value)} name="radioButtonTest" value="DMH" id="button5" />
                            <label for="button5">DMH</label>
                            <input type="radio" className="stv-radio-button" 
                            onClick={(event) => this.handleBreed(event.target.value)}name="radioButtonTest" value="DSH" id="button6" />
                            <label for="button6">DSH</label>
                            <input type="radio" className="stv-radio-button" 
                            onClick={(event) => this.handleBreed(event.target.value)} name="radioButtonTest" value="DLH" id="button7" />
                            <label for="button7">DLH</label>
                        </div>
                    </div>
                    <div className="reset-and-submit-buttons">
                        <button className="reset-filter-btn"
                        onClick={this.handleReset}>Reset</button>
                        <button className="submit-filter-btn"
                        onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
                <div>
                {
                    this.state.filtered 
                    ?
                        filterList.length !== 0 
                        ?
                        filterList
                        :
                        <h2 className="">No kitties found</h2>
                    :
                    mappedList
                }
                </div>
                <br></br>
                <Link to= '/adopt/adminadd'><button className="add-cat-btn">Add a Cat</button></Link>
                
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
