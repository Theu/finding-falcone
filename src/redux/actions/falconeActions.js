import {
    getTokenStart,
    getTokenSuccess,
    getTokenError,
    
    getPlanetsStart,
    getPlanetsSuccess,
    getPlanetsError,

    getVehiclesStart,
    getVehiclesSuccess,
    getVehiclesError
} from './actionsCreator';

import {
    consumeApi,
    axiosInstance
} from '../../tools/axiosConfiguration';

const {
    requestTokenToServer,
    requestPlanetsOrVehiclesServer
} = consumeApi(axiosInstance)


export function token_get_start() {
    return dispatch => {
        try {
            dispatch(getTokenStart());
        } catch (error) {
            dispatch(token_get_error(error));
        }
    }
}
export function token_get_success() {
    return async dispatch => {
        try {
            dispatch(token_get_start());
            dispatch(getTokenSuccess(await requestTokenToServer()));
        } catch (error) {
            dispatch(token_get_error(error));
        }
    }
}
export function token_get_error(error) {
    return dispatch => {
        dispatch(getTokenError(error));
    }
}

export function planets_get_start() {
    return dispatch => {
        try {
            dispatch(getPlanetsStart());
        } catch (error) {
            dispatch(planets_get_error(error));
        }
    }
}
export function planets_get_success() {
    return async dispatch => {
        try {
            dispatch(planets_get_start());
            dispatch(getPlanetsSuccess(await requestPlanetsOrVehiclesServer('planets')));
        } catch (error) {
            dispatch(planets_get_error(error));
        }
    }
}
export function planets_get_error(error) {
    return dispatch => {
        dispatch(getPlanetsError(error));
    }
}

export function vehicles_get_start() {
    return dispatch => {
        try {
            dispatch(getVehiclesStart());
        } catch (error) {
            dispatch(vehicles_get_error(error));
        }
    }
}
export function vehicles_get_success() {
    return async dispatch => {
        try {
            dispatch(vehicles_get_start());
            dispatch(getVehiclesSuccess(await requestPlanetsOrVehiclesServer('vehicles')));
        } catch (error) {
            dispatch(vehicles_get_error(error));
        }
    }
}
export function vehicles_get_error(error) {
    return dispatch => {
        dispatch(getVehiclesError(error));
    }
}
// const getRequest = async (endpoint) => axiosDefault.get(endpoint);

// export function PLANET_GET_REQUEST() {
//     return async dispatch => {
//         try {
//             dispatch(getPlanets(await getRequest('planets')));
//         } catch (error) {
//             console.log('PLANETS ERROR', error.response);
//         }
//     }
// }

// export function VEHICLES_GET_REQUEST() {
//     return async dispatch => {
//         try {
//             dispatch(getVehicles(await getRequest('vehicles')));
//         } catch (error) {
//             console.log('VEHICLES ERROR', error);
//         }
//     }
// }
