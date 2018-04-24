import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Principal from './pages/Principal';

class App extends Component {
  
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Buscador de paises</h1>
          <h6 className="App-title">Impulsado con React</h6>
        </header> 
        <Principal />
      </div>
    );
  }
}

export default App;
