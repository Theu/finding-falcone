import React from 'react';

import './errorHandler.css'

class ErrorHandler extends React.Component {
    render() {
        const {
            faillureReason
        } = this.props

        return (
            <div className='errorHandler-wrapper'>
                <div>You can't save the princess because of {faillureReason}.</div>
                <div className='toggle-alert'
                onClick={this.toggleError}>Got it</div>
            </div>
        )
    }

    toggleError = () => {
        window.location.reload()
    }

}

export default ErrorHandler;
