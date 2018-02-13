import {
    getToken,
    getPlanets,
    getVehicles
} from './actionsCreator';

import {
    baseURL,
    config
} from '../../tools/axiosConfiguration';


export function TOKEN_POST_REQUEST() {
    return async dispatch => {
        try {
            const requestToken = baseURL.post('token', null, config)
            dispatch(getToken(await requestToken))
        } catch (error) {
            console.log('TOKEN ERROR', error);
        }
    }
}

export function PLANET_GET_REQUEST() {
    return async dispatch => {
        try {
            const requestPlanets = baseURL.get('planets')
            dispatch(getPlanets(await requestPlanets))
        } catch (error) {
            console.log('PLANETS ERROR', error.response);
        }
    }
}

export function VEHICLES_GET_REQUEST() {
    return async dispatch => {
        try {
            const requestVehicles = baseURL.get('vehicles')
            dispatch(getVehicles(await requestVehicles))
        } catch (error) {
            console.log('VEHICLES ERROR', error);
        }
    }
}
