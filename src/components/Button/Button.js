import React from 'react';

import './button.css'

class Button extends React.Component {

    render() {
        const {
            buttonAction,
            buttonContent
        } = this.props
        
        return (
            <div className='button start-button'
            onClick={buttonAction}>
                {buttonContent}
            </div>
        )
    }
}

export default Button;