import {
    GET_TOKEN,
    GET_TOKEN_ERROR,

    GET_PLANETS,
    GET_PLANETS_ERROR,

    GET_VEHICLES,
    GET_VEHICLES_ERROR
} from './actionTypes';

import {
    consumeApi,
    axiosInstance
} from '../../tools/axiosConfiguration';

const {
    requestTokenToServer,
    requestPlanetsOrVehiclesServer
} = consumeApi(axiosInstance)

function fetchToken(token) {
    return {
        type: GET_TOKEN,
        payload: token
    }
}

function fetchTokenError(error) {
    return {
        type: GET_TOKEN_ERROR,
        payload: error
    }
}

function fetchPlanets(planets) {
    return {
        type: GET_PLANETS,
        payload: planets
    }
}

function fetchPlanetsError(error) {
    return {
        type: GET_PLANETS_ERROR,
        payload: error
    }
}

function fetchVehicles(vehicles) {
    return {
        type: GET_VEHICLES,
        payload: vehicles
    }
}

function fetchVehiclesError(error) {
    return {
        type: GET_VEHICLES_ERROR,
        payload: error
    }
}

export function obtainToken() {
    return dispatch => {
        requestTokenToServer()
        .then(response => {
            dispatch(fetchToken(response.data.token))
        })
        .catch(error => {
            dispatch(fetchTokenError(error))
        })
    }
}

export function obtainPlanets() {
    return dispatch => {
        requestPlanetsOrVehiclesServer('planets')
        .then(response => {
            dispatch(fetchPlanets(response.data))
        })
        .catch(error => {
            dispatch(fetchPlanetsError(error))
        })
    }
}

export function obtainVehicles() {
    return dispatch => {
        requestPlanetsOrVehiclesServer('vehicles')
        .then(response => {
            dispatch(fetchVehicles(response.data))
        })
        .catch(error => {
            dispatch(fetchVehiclesError(error))
        })
    }
}