import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getToken,
  getPlanets,
  getVehicles
 } from './redux/actions/falconeSelectors';

import {
  token_get_success,
  PLANET_GET_REQUEST,
  VEHICLES_GET_REQUEST
} from './redux/actions/falconeActions';

import Button from './components/Button/Button'

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
    this.props.TOKEN_POST_REQUEST();
    this.props.PLANET_GET_REQUEST();
    this.props.VEHICLES_GET_REQUEST();
  }
  render() {
    const {
      token,
      planets,
      vehicles
    } = this.props
    const linkPath = (token !== undefined && planets.length > 0 && vehicles.length > 0) ? 'pageSelector' : 'errorPage';
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
        // buttonAction={this.startQuest}
        buttonLink={linkPath} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    token: getToken(state),
    planets: getPlanets(state),
    vehicles: getVehicles(state)
  }
}

const mapDispatchToProps = {
  token_get_success,
  PLANET_GET_REQUEST,
  VEHICLES_GET_REQUEST
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
