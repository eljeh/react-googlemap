import React, { Component } from 'react';
import './Neighbourhood.css';
import CategoryCard from '../Categories/CategoryCard'
import AmenityCard from '../AmenityCard/AmenityCard'
class Neighbourhood extends Component {

	render() {
		return (
			<div className="neighbourhood-container m-3">
				<AmenityCard />
				<CategoryCard />
			</div>
		);
	}
}

export default Neighbourhood;