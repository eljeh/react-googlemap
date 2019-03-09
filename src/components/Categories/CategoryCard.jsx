import React, { Component } from 'react';
import Icon from './Icon';
import './CategoryCard.css';
class CategoryCard extends Component {

	render() {
		return (
			<div className="card category-card">
				<ul className="list-unstyled list-inline category-list m-0 p-0">
					<li className="list-inline-item category-item p-0">
						<Icon />
					</li>
					<li className="list-inline-item category-item p-0">
						<Icon />
					</li>
					<li className="list-inline-item category-item p-0">
						<Icon />
					</li>
					<li className="list-inline-item category-item p-0">
						<Icon />
					</li>
					<li className="list-inline-item category-item p-0">
						<Icon />
					</li>
				</ul>
			</div>
		);
	}
}

export default CategoryCard;