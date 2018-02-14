import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore'


import registerServiceWorker from './registerServiceWorker';

import Homepage from './Homepage';
import SelectorPage from './SelectorPage';
import ErrorPage from './ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import './index.css';

const store = configureStore()
render(
    <Provider store={store}>
        <Router>
            <div>
                <Header />
                    <div className='children-wrapper'>
                        <Route exact path='/' component={Homepage} />
                        <Route path='/pageSelector' component={SelectorPage} />
                        <Route path='/errorPage' component={ErrorPage} />
                    </div>
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
