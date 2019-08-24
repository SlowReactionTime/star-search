import React, { Component } from 'react';

const SearchBox = ({ onSearchChange, route }) => {
	var currentCategory = '';
	
	if (route === 'character') {
		currentCategory = 'Characters from Star Wars!';
	} else if (route === 'starship') {
		currentCategory = 'Starships from Star Wars!';
	} else {
		currentCategory = 'Planets from Star Wars!'
	}

	return(
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				style={{height: 50, width: 600}}
				type='search' 
				placeholder={'Search ' + currentCategory }
				onChange={onSearchChange}	
			/>
		</div>
	);
}

export default SearchBox;