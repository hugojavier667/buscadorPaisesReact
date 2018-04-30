import React, { Component } from 'react'
import { MapContainer } from '../components/MapContainer';
import InfoComponent from '../components/InfoComponent';
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';
import store from '../store';
import { connect } from 'react-redux'
import { seleccionarPais } from '../actions/paisesActions'

import { Col, Container, Row } from 'reactstrap';

const API_KEY_NOTICIAS = "8b90064bad2d426c9fa20a98f96f3277";

export class Principal extends Component {

  componentWillMount() {
    store.dispatch({
      type: "BUSCAR_PAISES",
      payload: axios.get("https://restcountries.eu/rest/v2/all"),
    })
  }

  render() {
    const containerStyle = {
      margin: "0px 0px 0px 0px",
      marginTop: "10px"
    }

    return (
      <div style={containerStyle}>
        <Row className="container-fluid">
          <Col xs="6" className="container-fluid">
            <Typeahead
              labelKey="name"
              options={this.props.paises}
              placeholder="Seleccione un pais..."
              onChange={(selected) => {
                this.props.seleccionarPais(selected[0])
              }}
            />
            <MapContainer pais={this.props.paisSeleccionado} />
          </Col>
          <Col xs="6">
            <InfoComponent pais={this.props.paisSeleccionado} noticias={this.props.noticias} />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    paises: state.paises.paises,
    paisSeleccionado: state.paises.paisSeleccionado,
    noticias: state.noticias
  }
}

const mapDispatchToProps = dispatch => {
  return {
    seleccionarPais: (pais) => {
      dispatch(seleccionarPais(pais));
      if (pais != undefined)
        store.dispatch({
          type: "BUSCAR_NOTICIAS",
          payload: axios.get("https://newsapi.org/v2/top-headlines?country=" + pais.alpha2Code + "&apiKey=" + API_KEY_NOTICIAS),
        })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Principal) 
