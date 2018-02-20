import React from 'react';
import {connect} from 'react-redux';

import {obtainPlanets} from './redux/actions/actionsCreator';
import {getPlanets} from './redux/actions/falconeSelectors';

import ButtonPlanet from './components/Button/ButtonPlanet'


class SelectorPage extends React.Component {
    
    
    componentWillMount() {
        this.props.obtainPlanets();
    }
    
    render() {
        const {
            planets
        } = this.props
        const planetList = (planets).map((planet, item) => {
            return  (
                // <li 
                //     key={item}
                //     onClick={this.choosePlanet}>
                //     {planet.name}
                // </li>
            );
        });
        return (
            <div>
                <ButtonPlanet
                    planetList={planetList} />
                <ButtonPlanet
                    planetList={planetList} />
                <ButtonPlanet
                    planetList={planetList} />
                <ButtonPlanet
                    planetList={planetList} />
            </div>
        )
    }
    choosePlanet = (event) => {
        console.log(event.target);
    }
}

function mapStateToProps(state) {
    return {
        planets: getPlanets(state)
    }
}

const mapDispatchToProps = {
    obtainPlanets
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorPage);
