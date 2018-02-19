import {
    GET_TOKEN,
    GET_TOKEN_ERROR,

    GET_PLANETS,
    GET_PLANETS_ERROR,

    GET_VEHICLES,
    GET_VEHICLES_ERROR
} from '../actions/actionTypes'

const initialState = {
    token: '',
    error: [],
    isLoading: true,
    planets: [],
    vehicles: []
}

export default function tokenReducer(state = initialState, action) {
    switch(action.type) {
        case GET_TOKEN:
            return {
                ...state,
                isLoading: false,
                token: action.payload
        }

        case GET_TOKEN_ERROR:
            return {
                ...state,
                isLoading: false,
                error: [action.payload.message, action.payload.response.status]
            }

        case GET_PLANETS:
            return {
                ...state,
                isLoading: false,
                planets: action.payload
            }

        case GET_PLANETS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: [action.payload.message, action.payload.response.status]
            }
        
        case GET_VEHICLES:
            return {
                ...state,
                isLoading: false,
                vehicles: action.payload
            }

        case GET_VEHICLES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: [action.payload.message, action.payload.response.status]
            }
        
        default:
            return state
    }
}
