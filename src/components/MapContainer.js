import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export class MapContainer extends Component {
    state = {
        lat: 25.505,
        lng: -80.09,
        zoom: 13,
      }
    
      render() {
        const position = [this.state.lat, this.state.lng]
        return (
          <Map center={position} zoom={this.state.zoom}  className="leaflet-container">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
          </Map>
        )
      }
}

export default MapContainer
