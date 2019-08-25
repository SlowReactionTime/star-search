import React from 'react';
import { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js';
import CardList from './CardList/CardList.js';
import CategorySelection from './CategorySelection/CategorySelection.js';
import Logo from './Logo/Logo.js';
import SearchBox from './SearchBox/SearchBox.js';
import Display from './Display/Display.js';
import Scroll from './Scroll.js';
import Particles from 'react-particles-js';
import axios from 'axios';

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
      route: 'character',
      searchField: '',
      people: [],
      starships: [],
      planetes: [],

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

    this.getCharacter = this.getCharacter.bind(this);
  };

  onRouteChange = (route) => {
    this.setState({route: route});
  }  

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(event);
  }

  getCharacter() {
    const url='https://swapi.co/api/people';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios.get(proxyurl + url)
      .then((response) => {
          console.log(response.data.results)
          this.setState( { people: response.data.results})
      })
  }

  getStarship() {
    const url='https://swapi.co/api/starships';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios.get(proxyurl + url)
      .then((response) => {
          console.log(response.data.results)
          this.setState( { starships: response.data.results})
      })
  }

  getPlanet() {
    const url='https://swapi.co/api/planets';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios.get(proxyurl + url)
      .then((response) => {
          console.log(response.data.results)
          this.setState( { planets: response.data.results})
      })
  }

  componentDidMount() {
    this.getCharacter();
    this.getStarship();
    this.getPlanet();
  }

  onCardClick = (id) => {

    if (this.state.route === 'character') {
      var person = this.state.people[id - 1];

      this.setState({name: person.name});
      this.setState({height: person.height});
      this.setState({mass: person.mass});
      this.setState({birthYear: person.birth_year});
    } else if (this.state.route === 'starship') {
      var starship = this.state.starships[id - 1];

      this.setState({name: starship.name});
      this.setState({manufacturer: starship.manufacturer});
      this.setState({starshipClass: starship.starship_class});
      this.setState({passenger: starship.passengers});
    } else {
      var planet = this.state.planets[id - 1];

      this.setState({name: planet.name});
      this.setState({climate: planet.climate});
      this.setState({terrain: planet.terrain});
      this.setState({diameter: planet.diameter});
    }
  }

  render() {
    const { route, people, name, height, mass, birthYear, manufacturer, starshipClass, passenger, climate, terrain, diameter } = this.state;

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
              <CardList route={ route } people={ people } onCardClick={this.onCardClick} />
            </div>
          </div>
      }
      </div>
    );


        {
          // 
        //
         //  <Scroll>

        //   <CardList category={  } />
        // </Scroll>
      } 



  }
}

export default App;
