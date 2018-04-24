import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'react-bootstrap-typeahead/css/Typeahead.css';

export class MapContainer extends Component {
  state = {
    lat: 25.505,
    lng: -80.09,
    zoom: 3,
  }

  render() {
    const position = this.props.pais != undefined ?
      [this.props.pais.latlng[0],this.props.pais.latlng[1]]
      : [this.state.lat, this.state.lng];

    const zoom = this.props.pais != undefined
      ? 6 : this.state.zoom;  
        
    return (
      <Map center={position} zoom={zoom} className="leaflet-container">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </Map>
    )
  }
}

export default MapContainer
