import React, {
  Component
} from 'react';
import {
  Map,
  GoogleApiWrapper
} from 'google-maps-react';

const mapStyles = {
  margin: '50px 0',
  width: '100%',
  height: '550px'
};

export class MapContainer extends Component {
  render() {
    return ( < Map google = {
        this.props.google
      }
      zoom = {
        14
      }
      style = {
        mapStyles
      }
      initialCenter = {
        {
          lat: -1.2884,
          lng: 36.8233
        }
      }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD18N2NJV9uk4XIxrJS2oNbSq922sHCXC8'
})(MapContainer);