import {
    GET_TOKEN
} from '../actions/actionTypes'

const initialState = {
    token: '',
    planets: [],
    vehicles: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_TOKEN:
            return {
                ...state,
                token: action.request.data.token
            }
        default:
            return state
    }
}
