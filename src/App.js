import React from 'react';
import { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js';
import Card from './Card/Card.js';
import CategorySelection from './CategorySelection/CategorySelection.js';
import Logo from './Logo/Logo.js';
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
      route: 'home'
    } 
  };

  onRouteChange = (route) => {
    this.setState({route: route});
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
            {
            // <SearchBox />
            // <CardList />
            }
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
