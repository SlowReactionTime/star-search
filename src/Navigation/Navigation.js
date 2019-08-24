import React from 'react';

const Navigation = ({ onRouteChange }) => {

		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('home')} className="f3 link glow br3 ph3 pv2 mb2 dib white bg-gray" >Category</p>
			</nav>
		);
	}

export default Navigation;