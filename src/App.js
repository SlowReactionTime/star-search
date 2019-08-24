import React from 'react';
import { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js';
import Card from './Card/Card.js';
import CardList from './CardList/CardList.js';
import CategorySelection from './CategorySelection/CategorySelection.js';
import Logo from './Logo/Logo.js';
import SearchBox from './SearchBox/SearchBox.js';
import Scroll from './Scroll.js';
import Particles from 'react-particles-js';
import {render} from 'react-dom';

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
      searchField: ''
    } 
  };

  onRouteChange = (route) => {
    this.setState({route: route});
  }  

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(event);
  }

  render() {
    const { route } = this.state;

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
              <CardList route={ route } />
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
