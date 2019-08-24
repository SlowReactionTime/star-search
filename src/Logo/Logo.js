import React from 'react';
import character from './character.jpg';
import starship from './starship.png';
import planet from './planet.jpg';
import Tilt from 'react-tilt';

const Logo = ({ route }) => {
	if (route === 'character') {
		return(
			<div className='ma4 mt0'>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 250, width: 250 }} >
				 	<div className="Tilt-inner pa3"><img style={{paddingTop: '40px'}} src={character} alt='character' /></div>
				</Tilt>
			</div>
		);
	} else if (route === 'starship') {
		return(
			<div className='ma4 mt0'>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 250, width: 250 }} >
				 	<div className="Tilt-inner pa3"><img style={{paddingTop: '40px'}} src={starship} alt='starship' /></div>
				</Tilt>
			</div>
		);
	} else {
		return(
			<div className='ma4 mt0'>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 250, width: 250 }} >
				 	<div className="Tilt-inner pa3"><img style={{paddingTop: '40px'}} src={planet} alt='planet' /></div>
				</Tilt>
			</div>
		);
	}

}

export default Logo;