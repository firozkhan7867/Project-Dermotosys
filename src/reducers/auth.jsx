import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
    SCHEDULE_DATA_FAIL,
    SCHEDULE_DATA_SUCCESS
} from '../actions/types';

const initialState = {
    // access: localStorage.getItem('access'),
    // refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    schedule_data: {"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
    // schedule_data:{"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            }
        
        case LOGIN_SUCCESS:
            // localStorage.setItem('access', payload.access);
            // localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                // access: payload.access,
                // refresh: payload.refresh
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case SCHEDULE_DATA_SUCCESS:
            console.log(payload.sucess)
            return {
                ...state,
                schedule_data: payload.sucess,
            }
        case SCHEDULE_DATA_FAIL:
            return {
                ...state,
                schedule_data: {"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            }
        
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        
        case SIGNUP_SUCCESS:
            localStorage.setItem("auth_token", payload.token);
            localStorage.setItem("auth_name", payload.account);
            return{
                ...state,
                isAuthenticated: false
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            // localStorage.removeItem('access');
            // localStorage.removeItem('refresh');
            return {
                ...state,
                // access: null,
                // refresh: null,
                isAuthenticated: false,
                user: null
            }
        // case PASSWORD_RESET_SUCCESS:
        // case PASSWORD_RESET_FAIL:
        // case PASSWORD_RESET_CONFIRM_SUCCESS:
        // case PASSWORD_RESET_CONFIRM_FAIL:
        // case ACTIVATION_SUCCESS:
        // case ACTIVATION_FAIL:
        //     return {
        //         ...state
        //     }
        default:
            return state
    }
};