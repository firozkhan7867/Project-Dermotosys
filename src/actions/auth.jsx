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
    SCHEDULE_DATA_SUCCESS,
    SCHEDULE_DATA_FAIL,
    APPOINT_FAIL,
    APPOINT_SUCCESS,
} from "./types";
import axios from "axios";

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    };

    const body = JSON.stringify({ email, password });

    // const body = {email:'sample@miniproject.com',password:'Sample@1234'};

    try {
        console.log(body);
        const res = await axios.post('http://127.0.0.1:8000/api/login/', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        // dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};


export const signup = (name,email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name,email, password });
    console.log(body);
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/register/', body, config);
        // console.log(res);
        dispatch({
            type:     SIGNUP_SUCCESS,
            payload: res.data
        });
        return 1;
        // dispatch(load_user());
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
        return 0;
    }
};



export const appointmentSubmit = (name,email,contact,age,gender,doctor,message,slot_id,user_id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name,email,contact,age,gender,doctor,message,slot_id,user_id });
    console.log(body);
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/register/', body, config);
        // console.log(res);
        dispatch({
            type:     APPOINT_SUCCESS,
        });
        // dispatch(load_user());
    } catch (err) {
        dispatch({
            type: APPOINT_FAIL,
        })
    }
};


export const get_schedule_data =  (doc_id) => async dispatch => {
    
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/getSloats', { params: { id: doc_id } });
        dispatch({
            type:     SCHEDULE_DATA_SUCCESS,
            payload: res.data
        });
        
    } catch (err) {
        dispatch({
            type: SCHEDULE_DATA_FAIL,
        })
    }
};



export const logout = () => dispatch => {
    dispatch({
        type:  LOGOUT,
    });
}