import React, { Component } from 'react';

import Button from './components/Button/Button'

import './Homepage.css';

class App extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <h1>Finding Falcone</h1>
        <div className='intro-text'>
          <h5>
            After the recent Falicornian war, King Shan has exiled Queen Al Falcone for 15 years. However, if he finds her before the 15 years are up, she has to go into exile for another 15 years!
          </h5>
          <h5>
            King Shan has received intelligence that Al Falcone is hiding in one of six neighbouring planets.
          </h5>
        </div>
        <Button 
        buttonContent={'Start to find Falcone'}
        buttonAction={this.startQuest} />   
      </div>
    );
  }
  startQuest = () => {
    console.log('compra una tastiera inglese')
  }
}

export default App;
