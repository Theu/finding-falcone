import {
    GET_TOKEN,
    GET_PLANETS,
    GET_VEHICLES
} from './actionTypes';

export function getToken(request) {
    return {
        type: GET_TOKEN,
        request
    }
}

export function getPlanets(request) {
    return {
        type: GET_PLANETS,
        request
    }
}

export function getVehicles(request) {
    return {
        type: GET_VEHICLES,
        request
    }
}
