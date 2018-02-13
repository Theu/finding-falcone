import React from 'react';
import { Link } from 'react-router-dom'

import './button.css'

class Button extends React.Component {

    render() {
        const {
            buttonAction,
            buttonContent,
            buttonLink
        } = this.props

        return (
            <div className='button start-button'
            onClick={buttonAction}>
                <Link to={buttonLink}>{buttonContent}</Link>
            </div>
        )
    }
}

export default Button;
