import React from 'react';
import PropTypes from 'prop-types'

const someArray = ['one', 'two', 'three', 'four'];

class Menu extends React.Component {
    static propTypes = {
        arrayToMap: PropTypes.string
    }
    render() {
        const {arrayToMap} = this.props;
        return (
            <ul>
            {
                arrayToMap.map((item, key) => {
                    return (
                        <li key={key}>
                            {item}
                        </li>)
                })
            }
            </ul>
        )
    }
}

export default Menu;
