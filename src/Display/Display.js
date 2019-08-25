import React from 'react';

const Display = ({ name, height, mass}) => {

		return (
			<div>
				<h2>{ 'name: ' + name}</h2> 
				<h2>{ 'height: ' + height}</h2> 
				<h2>{ 'mass: ' + mass}</h2> 
			</div>
		);
	}

export default Display;