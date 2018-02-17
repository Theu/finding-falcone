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
} from '../actions/actionTypes'

const initialState = {
    token: '',
    planets: [],
    vehicles: [],
    isLoading: false,
    isError: false,
    errorType: '',
    errorMessage: ''
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_TOKEN_START:
        case GET_VEHICLES_START:
        case GET_PLANETS_START:
            return {
                ...state,
                isloading: true,
        }

        case GET_TOKEN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.request.data.token
        }

        case GET_PLANETS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                planets: action.request.data
        }

        case GET_VEHICLES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                vehicles: action.request.data
        }

        case GET_TOKEN_ERROR:
        case GET_PLANETS_ERROR:
        case GET_VEHICLES_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorType: action.type,
                errorMessage: action.error.message
        }
        
        default:
            return state
    }
}
