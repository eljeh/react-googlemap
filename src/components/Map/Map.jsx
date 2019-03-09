import React, {Component} from 'react';
import {Map,GoogleApiWrapper} from 'google-maps-react';
import './Map.css';
const mapStyles = {
  width: '100%',
  height: '550px',
  'z-index': '-1'
};

export class MapContainer extends Component {
  render() {
    return ( < Map google = {this.props.google}
      zoom = {14}
      style = {mapStyles}
      initialCenter = {{
          lat: 51.0289659,
          lng: -114.1182789
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD18N2NJV9uk4XIxrJS2oNbSq922sHCXC8'
})(MapContainer);