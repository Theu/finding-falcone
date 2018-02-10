import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import Homepage from './Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import './index.css';


ReactDOM.render(
    <Router>
        <div>
            <Header />
                <div className='children-wrapper'>
                    <Route exact path='/' component={Homepage} />
                </div>
            <Footer />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
