import React from 'react';
import {connect} from 'react-redux';

import {
    getPlanets,
    getVehicles,
    getError,
    getErrorMessage
   } from './redux/actions/falconeSelectors';
  
  import {
    planets_get_success,
    vehicles_get_success
  } from './redux/actions/falconeActions';

import Menu from './components/Menu/Menu'

class SelectorPage extends React.Component {
    componentWillMount() {
        this.props.planets_get_success();
        this.props.vehicles_get_success();
    }
    render() {
        const {
            planets,
            vehicles
        } = this.props
        // const fetchedPlanets = JSON.parse(planets)
        function jsonToMap(jsonStr) {
            return new Map(JSON.parse(jsonStr));
        }
        const fetchedPlanets = jsonToMap(planets)
        console.log('planets', fetchedPlanets);
        return (
            // <Menu
            // arrayToMap={fetchedPlanets} />
            <h1>si</h1>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      planets: getPlanets(state),
      vehicles: getVehicles(state),
      isError: getError(state),
      errorMessage: getErrorMessage(state)
    }
  }
  
  const mapDispatchToProps = {
    planets_get_success,
    vehicles_get_success
  }

export default connect(mapStateToProps, mapDispatchToProps)(SelectorPage);
