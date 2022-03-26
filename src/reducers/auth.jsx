import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT,
    SCHEDULE_DATA_FAIL,
    SCHEDULE_DATA_SUCCESS,
    APPOINT_FAIL,
    APPOINT_SUCCESS,
    PATIENT_UPDATE_SUCCESS,
    PATIENT_UPDATE_FAIL,
    APPT_DATA_SUCCESS,
    APPT_DATA_FAIL
} from '../actions/types';

const initialState = {
    // access: localStorage.getItem('access'),
    // refresh: localStorage.getItem('refresh'),
    isAuthenticated: false,
    user: null,
    userData:{"id":null,"name":"","email":""},
    schedule_data: {"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
    userApptData:[],
    // schedule_data:{"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('account', JSON.stringify(payload.account));
            localStorage.setItem('token', JSON.stringify(payload.token));
            localStorage.setItem('isAuthenticated', true);
            return {
                ...state,
                isAuthenticated: true,
                userData: payload.account,
                // access: payload.access,
                // refresh: payload.refresh
            }
        case PATIENT_UPDATE_SUCCESS:
            localStorage.setItem('account', JSON.stringify(payload.account));
            // localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                userData: payload.sucess,
                // access: payload.access,
                // refresh: payload.refresh
            }
            
        case SCHEDULE_DATA_SUCCESS:
            return {
                ...state,
                schedule_data: payload.sucess,
            }
        case APPT_DATA_SUCCESS:
            localStorage.setItem('patientlist', JSON.stringify(payload));
            return {
                ...state,
                userApptData: payload,
            }
        case APPT_DATA_FAIL:
            return {
                ...state,
                userApptData: [],
            }
        case SCHEDULE_DATA_FAIL:
            return {
                ...state,
                schedule_data: {"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
            }
       
        
        case SIGNUP_SUCCESS:
            localStorage.setItem("auth_token", JSON.stringify(payload.token));
            localStorage.setItem("auth_name", JSON.stringify(payload.account));
            return{
                ...state,
                isAuthenticated: false
            }
        
        case PATIENT_UPDATE_FAIL:
            return{

            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('account');
            localStorage.removeItem('token');
            localStorage.removeItem('isAuthenticated');
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                userData:{"id":null,"name":"","email":""},
                userApptData:[],
                schedule_data:{"Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]},
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