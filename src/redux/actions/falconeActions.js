import {
    getToken
} from './actionsCreator';

import {
    baseURL,
    config
} from '../../tools/axiosConfiguration';


export function postTokenRequest() {
    return async dispatch => {
        try {
            const requestToken = baseURL.post('token', null, config)
            dispatch(getToken(await requestToken))
        } catch (error) {
            console.log('TOKEN ERROR', error);
        }
    }
}
