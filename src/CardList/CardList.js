import React, { Component } from 'react'
import Card from '../Card/Card.js';
import { character } from '../character/character.js';

// CardList returns a series of <Card />s
// data from robots.js help assign properties of Cards
const CardList = ({ route }) => {

	var currentCategory = character;

	return(
		<div>
			{currentCategory.map((user, i) => {
				return <Card  						
					id={currentCategory[i].id} 
					name={currentCategory[i].name} 
					image={currentCategory[i].image}
					route={ route }
				/>
			})}	
		</div>
	);
}

export default CardList;