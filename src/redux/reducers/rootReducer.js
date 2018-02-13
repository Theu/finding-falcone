import {
    GET_TOKEN,
    GET_PLANETS,
    GET_VEHICLES
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
        case GET_PLANETS:
            return {
                ...state,
                planets: action.request.data
            }
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: action.request.data
            }
        default:
            return state
    }
}
