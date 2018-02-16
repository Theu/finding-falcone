import React from 'react';

const someArray = ['one', 'two', 'three', 'four'];

class Menu extends React.Component {
    render() {
        return (
            <ul>
            {
                someArray.map((item, key) => {
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
