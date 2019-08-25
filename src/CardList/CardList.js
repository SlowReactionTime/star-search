import React from 'react'
import Card from '../Card/Card.js';
import { character } from '../character/character.js';
// import { starship } from '../starship/starship.js';
// import { planet } from '../planet/planet.js';

// CardList returns a series of <Card />s
// data from robots.js help assign properties of Cards
const CardList = ({ route, onCardClick }) => {

	var currentCategory = character;

	// if (route === 'character') {
	// 	currentCategory = character;
	// } else if (route === 'starship') {
	// 	currentCategory = starship;
	// } else {
	// 	currentCategory = planet;
	// }

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