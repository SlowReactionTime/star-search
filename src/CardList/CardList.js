import React from 'react'
import Card from '../Card/Card.js';
import { character } from '../character/character.js';

// CardList returns a series of <Card />s
// data from robots.js help assign properties of Cards
const CardList = ({ route, onCardClick }) => {

	var currentCategory = character;
	var display = 'sample';

	return(
		<div>
			{currentCategory.map((user, i) => {
				return <Card  						
					id={currentCategory[i].id} 
					name={currentCategory[i].name} 
					image={currentCategory[i].image}
					route={ route }
					onCardClick={ onCardClick }
				/>
			})}				
		</div>
	);
}

export default CardList;