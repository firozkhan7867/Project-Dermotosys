import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT,
    SCHEDULE_DATA_SUCCESS,
    SCHEDULE_DATA_FAIL,
    APPOINT_FAIL,
    APPOINT_SUCCESS,
    PATIENT_UPDATE_SUCCESS,
    PATIENT_UPDATE_FAIL,
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
        // console.log(body);
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
    // console.log(body);
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/CreateAppoinment/', body, config);
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



export const updatePatientProfile = (firstname,lastname,phno,dob,bloodgroup,address,city,state,country,zip,pic,id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    let formData = new FormData(); 
    console.log(pic);  //formdata object

    formData.append('firstname', firstname);  
    formData.append('lastname', lastname); 
    formData.append('phno', phno); 
    formData.append('dob', dob); 
    formData.append('bloodgroup', bloodgroup); 
    formData.append('address', address); 
    formData.append('city', city); 
    formData.append('state', state); 
    formData.append('country', country); 
    formData.append('zipcode', zip); 
    formData.append('id', id);  //append the values with key, value pair
    formData.append('age', 20);
    formData.append("pic", pic);

    // const body = JSON.stringify({ firstname,lastname,phno,dob,bloodgroup,address,city,state,country,zip,pic,id });
    // console.log(formData);
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/UpdateUser/', formData, config);
        // console.log(res);
        dispatch({
            type:     PATIENT_UPDATE_SUCCESS,
            payload: res.data
        });
        // dispatch(load_user());
    } catch (err) {
        dispatch({
            type: PATIENT_UPDATE_FAIL,
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




// addSlot





export const addSlot = (start,end,weekday) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const id = 1;

    const body = JSON.stringify({start,end,weekday,id });
    console.log(body);
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/Addslot/', body, config);
        console.log(res);
        // get_schedule_data(1);
        // dispatch({
        //     type:     APPOINT_SUCCESS,
        // });
        // dispatch(load_user());
    } catch (err) {
        // dispatch({
        //     type: APPOINT_FAIL,
        // })
    }
};


export const delSlot = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({id });
    console.log(body);
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/DelSlot/', body, config);
        console.log(res);
        // get_schedule_data(1);
        // dispatch({
        //     type:     APPOINT_SUCCESS,
        // });
        // dispatch(load_user());
    } catch (err) {
        // dispatch({
        //     type: APPOINT_FAIL,
        // })
    }
};



export const logout = () => dispatch => {
    dispatch({
        type:  LOGOUT,
    });
}