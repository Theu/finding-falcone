import {
    GET_TOKEN
} from './actionTypes';

export function getToken(request) {
    return {
        type: GET_TOKEN,
        request
    }
}
