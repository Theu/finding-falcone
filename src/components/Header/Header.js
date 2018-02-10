import React from 'react';

import './header.css'

class Header extends React.Component {
    render() {
        return (
            <header className='header-wrapper'>
                <div className='header-logo'>Finding Falcone!</div>
                <nav>
                    <a href='http://www.matteocontini.com'>Reset</a>
                    <a href='https://www.geektrust.in/'>Geek Trust Home</a>
                </nav>
            </header>
        )
    }
}

export default Header;