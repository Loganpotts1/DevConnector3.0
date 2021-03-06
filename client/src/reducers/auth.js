import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    USER_LOADED, 
    LOGOUT,
    AUTH_ERROR,
    ACCOUNT_DELETED
} from "../actions/types";


const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null
};


export default function(state = initialState, action) {
    const { type, payload } = action;


    switch(type) {

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };

        case LOGOUT:
        case AUTH_ERROR:
        case ACCOUNT_DELETED:
            return {
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        
        default:
            return state;
    }
}