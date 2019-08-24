import React from 'react';
import './Card.css';

const Card = ({ id, name, image, route }) => {

	var backgroundColor = '';

	if (route === 'character') {
		backgroundColor = 'bg-dark-gold';
	} else if (route === 'starship') {
		backgroundColor = 'bg-teal';
	} else {
		backgroundColor = 'bg-brown';
	}

	return (
		<div className={"mw5 tc dib br3 pa3 ma2 grow bw2 shadow-5 " + backgroundColor}>
			<img className="img-size-medium" alt='image' src={ image }/>
				<div>
					<h2>{ name }</h2>
				</div>
		</div>
	);
	}

export default Card;