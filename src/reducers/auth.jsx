import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT,
    SCHEDULE_DATA_FAIL,
    SCHEDULE_DATA_SUCCESS,
    APPOINT_FAIL,
    APPOINT_SUCCESS
} from '../actions/types';

const initialState = {
    // access: localStorage.getItem('access'),
    // refresh: localStorage.getItem('refresh'),
    isAuthenticated: false,
    user: null,
    userData:{"id":null,"name":"","email":""},
    schedule_data: {"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
    // schedule_data:{"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('account', payload.account);
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                userData: payload.account,
                // access: payload.access,
                // refresh: payload.refresh
            }
        case SCHEDULE_DATA_SUCCESS:
            return {
                ...state,
                schedule_data: payload.sucess,
            }
        case SCHEDULE_DATA_FAIL:
            return {
                ...state,
                schedule_data: {"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
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
                user: null,
                userData:{"id":null,"name":"","email":""},
            }
        case APPOINT_SUCCESS:
        case APPOINT_FAIL:
            return {
                
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