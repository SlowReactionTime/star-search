import React from 'react';
import './Logo.css';
import character from './character.jpg';
import starship from './starship.png';
import planet from './planet.jpg';
import Tilt from 'react-tilt';

const Logo = ({ route }) => {

	var currentCategory = '';
	
	if (route === 'character') {
		currentCategory = character;
	} else if (route === 'starship') {
		currentCategory = starship;
	} else {
		currentCategory = planet;
	}

	return(
			<div className='pa2' style={{display: 'flex', justifyContent: 'center'}}>
				<Tilt className="Tilt container Tilt-inner br2 shadow-5" options={{ max : 50 }} style={{ height: 300, width: 300 }} >			 	
				 		<img style={{ height: 300, width: 300 }} src={currentCategory} alt='currentCategory' />
				 		<h1 className='font-big font-star-wars centered'>STAR <br />SEARCH</h1>
				</Tilt>
			</div>
	);
}

export default Logo;