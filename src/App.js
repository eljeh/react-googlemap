import React, { Component } from 'react';
import './App.css';
import Map from './components/Map/Map';
import Neighbourhood from './components/Neighbourhood/Neighbourhood';
class App extends Component {
 
  render() {
    return (
      <div className="map-holder mt-5">
        <Map />
        <Neighbourhood />
      </div>
    );
  }
}

export default App;