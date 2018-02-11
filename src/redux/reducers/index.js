import { combineReducers } from 'redux';
import spaceReducer from './spaceReducer';

const rootReducer = combineReducers({
    space: spaceReducer
});

export default rootReducer;