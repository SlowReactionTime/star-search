import React from 'react';
import './CategorySelection.css';
import '../Logo/Logo.css';

const CategorySelection = ({ onRouteChange }) => {
		return (
			<div className="pa6">
			<article className="mw7 center bg-black br3 pa3 pa4-ns ba">
			  <div className="tc">
			    <h1 className="tc font-big font-star-wars">STAR <br/> SEARCH</h1>
			    <hr className="bg-white mw6 bb bw1 b--black-10" />
			  </div>
			
					<div className="ph3 tc">
					  <p onClick={() => onRouteChange('character')} className="font-medium link grow glow br3 ph3 pv2 mb2 dib white bg-dark-gold pointer" >Character</p>
					  <p onClick={() => onRouteChange('starship')} className="font-medium link grow glow br3 ph3 pv2 mb2 dib white bg-teal pointer">Starship</p>
					  <p onClick={() => onRouteChange('planet')} className="font-medium link grow glow br3 ph3 pv2 mb2 dib white bg-brown pointer">Planet</p>
					</div>
			</article>

			<nav className='pa5' style={{display: 'flex', justifyContent: 'center'}}>
				<a className="font-medium mw5 tc br3 pa3 ma2 grow bw2 shadow-5 black bg-white pointer" href="https://github.com/SlowReactionTime/star-search" target='_blank'>GitHub</a>
			</nav>
			
			</div>
		);		
	}

export default CategorySelection;