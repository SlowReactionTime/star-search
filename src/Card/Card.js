import React from 'react';

const Card = ({ name, image }) => {

		return (
			<div>
				<img alt='image' src={ image }/>
					<div>
						<h2>{ name }</h2>
					</div>
			</div>
		);
	}

export default Card;