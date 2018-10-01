import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import route from './route';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UpperFooter from './Components/UpperFooter/UpperFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        {route}
        <UpperFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
