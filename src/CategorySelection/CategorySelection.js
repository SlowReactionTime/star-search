import React from 'react';
import './CategorySelection.css';

const CategorySelection = ({ onRouteChange }) => {
		return (
			<div className="pa6">
			<article className="mw6 center bg-black br3 pa3 pa4-ns ba b--black-10">
			  <div className="tc">
			    <h1 className="tc f1 font-star-wars">STAR <br/> SEARCH</h1>
			    <hr className="white mw6 bb bw1 b--black-10" />
			  </div>
			
					<div className="ph3 tc">
					  <p onClick={() => onRouteChange('character')} className="f3 link grow glow br3 ph3 pv2 mb2 dib white bg-dark-gold pointer" >Character</p>
					  <p onClick={() => onRouteChange('starship')} className="f3 link grow glow br3 ph3 pv2 mb2 dib white bg-teal pointer">Starship</p>
					  <p onClick={() => onRouteChange('planet')} className="f3 link grow glow br3 ph3 pv2 mb2 dib white bg-brown pointer">Planet</p>
					</div>
			</article>
			</div>
		);		
	}

export default CategorySelection;