import React from 'react';

const Navigation = ({ onRouteChange }) => {

		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('home')} className="mw5 tc br3 pa3 ma2 grow bw2 shadow-5 white bg-blue" >Category</p>
			</nav>
		);
	}

export default Navigation;