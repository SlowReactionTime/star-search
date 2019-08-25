import React from 'react';

const Display = ({ route, name, height, mass, birthYear, manufacturer, starshipClass, passenger, climate, terrain, diameter}) => {

	const infoType1 = 'Name: '; 
	var infoType2 = '';
	var infoType3 = '';
	var infoType4 = '';
	

	const info1 = name;
	var info2 = '';
	var info3 = '';
	var info4 = '';
	

	if (route === 'character') {
		infoType2 = 'Height: ';
		info2 = height;
		infoType3 = 'Mass: ';
		info3 = mass;
		infoType4 = 'Birth Year: '
		info4 = birthYear;  
	} else if (route === 'starship') {
		infoType2 = 'Manufacturer: ';
		info2 = manufacturer;
		infoType3 = 'Starship Class: ';
		info3 = starshipClass;
		infoType4 = 'Passenger: '
		info4 = passenger;  
	} else {
		infoType2 = 'Climate: ';
		info2 = climate;
		infoType3 = 'Terrain: ';
		info3 = terrain;
		infoType4 = 'Diameter: '
		info4 = diameter;  
	}


		return (
			<div>
				<h2>{ infoType1 + info1}</h2> 
				<h2>{ infoType2 + info2}</h2> 
				<h2>{ infoType3 + info3}</h2> 
				<h2>{ infoType4 + info4}</h2> 
			</div>
		);
	}

export default Display;