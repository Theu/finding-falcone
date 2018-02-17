import {
    getTokenStart,
    getTokenSuccess,
    getTokenError,
    getPlanetsSuccess,
    getVehiclesSuccess
} from './actionsCreator';

import {
    consumeApi,
    axiosInstance
} from '../../tools/axiosConfiguration';

const {
    requestTokenToServer
} = consumeApi(axiosInstance)


export function token_get_start() {
    return dispatch => {
        try {
            dispatch(getTokenStart())
        } catch (error) {
            dispatch(token_get_error(error))
        }
    }
}
export function token_get_success() {
    return async dispatch => {
        try {
            dispatch(token_get_start())
            dispatch(getTokenSuccess(await requestTokenToServer()))
        } catch (error) {
            dispatch(token_get_error(error))
        }
    }
}
export function token_get_error(error) {
    return dispatch => {
        dispatch(getTokenError(error))
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
