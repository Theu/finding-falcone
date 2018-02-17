import {
    GET_TOKEN_START,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_ERROR,
    
    GET_PLANETS_START,
    GET_PLANETS_SUCCESS,
    GET_PLANETS_ERROR, 
    
    GET_VEHICLES_START,
    GET_VEHICLES_SUCCESS,
    GET_VEHICLES_ERROR
} from './actionTypes';

export function getTokenStart(request) {
    return {
        type: GET_TOKEN_START,
        request
    }
}

export function getTokenSuccess(request) {
    return {
        type: GET_TOKEN_SUCCESS,
        request
    }
}

export function getTokenError(error) {
    return {
        type: GET_TOKEN_ERROR,
        error
    }
}

export function getPlanetsStart(request) {
    return {
        type: GET_PLANETS_START,
        request
    }
}

export function getPlanetsSuccess(request) {
    return {
        type: GET_PLANETS_SUCCESS,
        request
    }
}

export function getPlanetsError(error) {
    return {
        type: GET_PLANETS_ERROR,
        error
    }
}

export function getVehiclesStart(request) {
    return {
        type: GET_VEHICLES_START,
        request
    }
}

export function getVehiclesSuccess(request) {
    return {
        type: GET_VEHICLES_SUCCESS,
        request
    }
}

export function getVehiclesError(error) {
    return {
        type: GET_VEHICLES_ERROR,
        error
    }
}
