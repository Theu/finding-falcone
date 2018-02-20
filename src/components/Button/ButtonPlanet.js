import React from 'react';
import { Link } from 'react-router-dom'

import './button.css'

class ButtonPlanet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlanets: false,
        }
    }

    render() {
        const {
            buttonAction,
            buttonContent,
            buttonLink,
            planetList
        } = this.props

        return (
            <div>
                <button 
                    onClick={this.openPlanetSelection} >
                    planets
                </button>
                {this.state.showPlanets &&
                    <ul>
                        
                    {(planets).map((planet, item) => {
                        <li 
                            key={item}
                            onClick={this.choosePlanet}>
                            {planet.name}
                        </li>
                    )}    
                    </ul>
                }
            </div>
        )
    }
    openPlanetSelection = () => {
        this.setState({
            showPlanets:true
        })
    }
}

export default ButtonPlanet;
