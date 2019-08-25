import React from 'react'
import Card from '../Card/Card.js';


const CardList = ({ route, filteredCategory, onCardClick }) => {

	return(
		<div>
			{filteredCategory.map((user, i) => {
				return <Card  						
					id={filteredCategory[i].id} 
					name={filteredCategory[i].name} 
					image={filteredCategory[i].image}
					route={ route }
					onCardClick={ onCardClick }
				/>
			})}				
		</div>
	);
}

export default CardList;