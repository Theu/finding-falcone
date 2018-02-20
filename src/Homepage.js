import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getToken,
  getPlanets,
  getVehicles,
  getError,
  hasError
 } from './redux/actions/falconeSelectors';

import {
  obtainToken,
  obtainPlanets,
  obtainVehicles
} from './redux/actions/actionsCreator';

import ErrorHandler from './ErrorHandler';
import Button from './components/Button/Button';

import './Homepage.css';

class App extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      token: '',
      planets: [],
      vehicles: []
    }
  }
  componentWillMount() {
    this.props.obtainToken();
    this.props.obtainPlanets()
    this.props.obtainVehicles()
  }
  render() {
    const {
      error,
      hasError,
      planets,
      vehicles
    } = this.props
    
    const linkPath = 'pageSelector';
    console.log('vehiclesclient', planets);
    
    console.log('usePlanets', planets.map((planet, key) => {
      console.log(key);
      console.log('name', planet.name);
      console.log('distance', planet.distance);
    }));

    console.log('useVehicles', vehicles.map((vehicles, key) => {
      console.log('name_veh', vehicles.name);
      console.log('name_tono', vehicles.total_no);
      console.log('name_maxdis', vehicles.max_distance);
      console.log('name_speed', vehicles.speed);
    }));
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
        {hasError ?
          <ErrorHandler
            faillureReason={error[0]} />
        :
          <Button
            buttonContent={'Start to find Falcone'}
            buttonLink={linkPath} />
        }
        
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    token: getToken(state),
    planets: getPlanets(state),
    vehicles: getVehicles(state),
    error: getError(state),
    hasError: hasError(state)
  }
}

const mapDispatchToProps = {
  obtainToken,
  obtainPlanets,
  obtainVehicles
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
