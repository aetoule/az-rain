import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SponsorAPet extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {count} = this.props;
        const azraingoals = [];
        for (let i= 0; i < count; i++) {
            azraingoals.push(<h2>AZ Rain Goals</h2>)
        }
        const {catListProp} = this.props;
        let printKittyList = catListProp.map((cat, i) => {
            console.log(cat)
            return(
            <div className="mapped-cat-list" key={i}>
                <img className="cat-img" src={cat.img}/>
                <p className="cat-name">{cat.name}</p> 
                <p className="cat-age">{cat.age}</p> 
            </div>)
        });
        
        return (  
            <div>
                {azraingoals}
                {printKittyList}
            </div>
        );
    }

    
}
 
SponsorAPet.propTypes={
    catListProp: PropTypes.array.isRequired
}
export default SponsorAPet;

function withData(url) {
    return function(WrappedComponent) {
        return class extends Component {
        state = {
          isLoading: false,
          data: null,
          error: null
        }
    
        componentDidMount() {
          this.setState({ isLoading: true })
          axios.get(url, {
            headers: {
              apikey: 'tylercollier'
            }
          }).then(response => {
            this.setState({ data: response.data, isLoading: false });
          }).catch(error => {
            console.log('-------------- error', error);
            this.setState({ error });
          });
        }
    
        render() {
          const { isLoading, data, error } = this.state;
          
          return <div>
            {error
              ? <div>Oh no! There was an error loading the data. Please try again later.</div>
              : (isLoading || !data)
                ? <div>Loading...</div>
                : <WrappedComponent gods={data} />
            }
          </div>
        }
      }
    }
  }
  