import React from 'react';
import { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js';
import CardList from './CardList/CardList.js';
import CategorySelection from './CategorySelection/CategorySelection.js';
import Logo from './Logo/Logo.js';
import SearchBox from './SearchBox/SearchBox.js';
import Display from './Display/Display.js';
import { character } from './Character/character.js';
import { starship } from './starship/starship.js';
import { planet } from './planet/planet.js';
import Particles from 'react-particles-js';

const constParticles = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },

    line_linked: {
     shadow: {
       enable: true,
       color: "white",         
     }
    }
  }
} 

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'home',
      searchField: '',
      person: [],
      starship: [],
      planet: [],

      //states for character
      name: '',
      height: '',
      mass: '',
      birthYear: '',      

      //states for starship
    //name:
      manufacturer: '',
      starshipClass: '',
      passenger: '',

      //states for planets
    //name:
      climate: '',
      terrain: '',
      diameter: ''
    } 
  };

  onRouteChange = (route) => {
    //change route
    this.setState({route: route});

    //refresh all the data for display whenever route changes
    this.setState({name: ''});
    this.setState({height: ''});
    this.setState({mass: ''});
    this.setState({birthYear: ''});
    this.setState({manufacturer: ''});
    this.setState({starshipClass: ''});
    this.setState({passenger: ''});
    this.setState({climate: ''});
    this.setState({terrain: ''});
    this.setState({diameter: ''});
    this.setState({searchField: ''});
  }  

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  setStateCharacter(id) {
    const url='https://swapi.dev/api/people/' + id + `/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({name: data.name});
          this.setState({height: data.height});
          this.setState({mass: data.mass});
          this.setState({birthYear: data.birth_year});
        });

    return this.state.person;
  }

  setStateStarship(id) {
    const url='https://swapi.dev/api/starships/' + id + `/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({name: data.name});
          this.setState({manufacturer: data.manufacturer});
          this.setState({starshipClass: data.starship_class});
          this.setState({passenger: data.passengers});
        });

    return this.state.starship;
  }

  setStatePlanet(id) {
    const url='https://swapi.dev/api/planets/' + id + `/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({name: data.name});
          this.setState({climate: data.climate});
          this.setState({terrain: data.terrain});
          this.setState({diameter: data.diameter});
        });

        return this.state.planet;
  }

  onCardClick = (id) => {
    if (this.state.route === 'character') {  
      this.setStateCharacter(id);

    } else if (this.state.route === 'starship') {
      this.setStateStarship(id);

    } else {
      this.setStatePlanet(id);
    }
  }

  getCurrentCategory = () => {
    if (this.state.route === 'character') {
      return(character);
    } else if (this.state.route === 'starship') {
      return(starship);
    } else {
      return(planet);
    }
  }

  render() {
    const { route, searchField, people, name, height, mass, birthYear, manufacturer, starshipClass, passenger, climate, terrain, diameter } = this.state;
    
    const currentCategory = this.getCurrentCategory();

    const filteredCategory = currentCategory.filter(currentCategory => {
      return currentCategory.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return(
      <div>
      <Particles className='particles' params={ constParticles } />

      { route === 'home'
        ? <CategorySelection onRouteChange={this.onRouteChange} />
        : <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo route={ route } />
            <div className='tc'>
              <SearchBox onSearchChange={this.onSearchChange} route={ route } />
              <Display 
                route={ route } name={ name } height={ height } mass={ mass } birthYear={ birthYear } manufacturer={ manufacturer } starshipClass={ starshipClass } passenger={ passenger } climate={ climate } terrain={ terrain } diameter={ diameter }/>              
                <CardList route={ route } filteredCategory={ filteredCategory } onCardClick={this.onCardClick} />            
            </div>
          </div>
      }
      </div>
    );
  }
}

export default App;
