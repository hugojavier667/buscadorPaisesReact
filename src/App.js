import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './components/MapContainer';
import InfoComponent from './components/InfoComponent';
import { Col, Container, Row } from 'reactstrap';

class App extends Component {
  
  render() {
    const containerStyle = {
      margin : "0px 0px 0px 0px",
      marginTop : "10px"
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Buscador de paises</h1>
          <h6 className="App-title">Impulsado con React</h6>
        </header> 
        <div style={containerStyle}>
          <Row>
              <Col xs="6">
                <MapContainer />
              </Col>
              <Col xs="6">
                <InfoComponent />
              </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
