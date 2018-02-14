import {
    getToken,
    getPlanets,
    getVehicles
} from './actionsCreator';

import {
    axiosDefault,
    config
} from '../../tools/axiosConfiguration';


export function TOKEN_POST_REQUEST() {
    return async dispatch => {
        try {
            const requestToken = axiosDefault.post('token', null, config)
            dispatch(getToken(await requestToken))
        } catch (error) {
            console.log('TOKEN ERROR', error);
        }
    }
}

const getRequest = async (endpoint) => axiosDefault.get(endpoint);

export function PLANET_GET_REQUEST() {
    return async dispatch => {
        try {
            dispatch(getPlanets(await getRequest('planets')));
        } catch (error) {
            console.log('PLANETS ERROR', error.response);
        }
    }
}

export function VEHICLES_GET_REQUEST() {
    return async dispatch => {
        try {
            dispatch(getVehicles(await getRequest('vehicles')));
        } catch (error) {
            console.log('VEHICLES ERROR', error);
        }
    }
}
