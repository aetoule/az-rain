import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import route from './route';
import Header from './Components/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        {route}
      </div>
    );
  }
}

export default App;
