import React, { Component } from 'react'
import Card from './Card';

// CardList returns a series of <Card />s
// data from robots.js help assign properties of Cards
const CardList = ({ route }) => {
	return(
		<div>
			{robots.map((user, i) => {
				return <Card 
					key={robots[i].id} 						
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email} 
				/>
			})}	
		</div>
	);
}

export default CardList;