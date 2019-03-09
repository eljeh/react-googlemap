import React, { Component } from 'react';
import Amenity from './Amenity';
import './AmenityCard.css';
class AmenityCard extends Component {

	render() {
		return (
			<div className="card amenity-card">
				<ul className="list-group amenity-list">
					<li className="list-group-item amenity-item">
						<Amenity/>
					</li>
					<li className="list-group-item amenity-item">
						<Amenity/>
					</li>
				</ul>
			</div>
		);
	}
}

export default AmenityCard;