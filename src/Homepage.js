import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getToken,
  getPlanets,
  getVehicles,
  getError,
  getErrorMessage
 } from './redux/actions/falconeSelectors';

import {
  token_get_success,
  planets_get_success,
  vehicles_get_success
} from './redux/actions/falconeActions';

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
    this.props.token_get_success()
    this.props.planets_get_success();
    this.props.vehicles_get_success()
  }
  render() {
    const {
      isError,
      errorMessage
    } = this.props
    const linkPath = 'pageSelector';
    
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
        {isError ?
          <ErrorHandler
            faillureReason={errorMessage} />
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
  console.log('STATE', state);
  return {
    token: getToken(state),
    planets: getPlanets(state),
    vehicles: getVehicles(state),
    isError: getError(state),
    errorMessage: getErrorMessage(state)
  }
}

const mapDispatchToProps = {
  token_get_success,
  planets_get_success,
  vehicles_get_success
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
