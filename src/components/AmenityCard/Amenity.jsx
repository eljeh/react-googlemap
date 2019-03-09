import React, { Component } from 'react';
class Amenity extends Component {

	render() {
		return (
			<div className="amenity">
				<div className="image">image</div>
				<div className="details">
					<div><strong>name</strong></div>
					<div>description</div>
					<div>address</div>
					<div className="distance">XX.4km</div>
				</div>
			</div>
		);
	}
}

export default Amenity;