import { AUTH_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./types";
import { returnErrors } from "./errors";
import axios from "axios";

export const loadUser = _id => (dispatch, getState) => {
    dispatch({ type: USER_REQUESTED });

    axios.get(`/api/v1/clients/${_id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });

        } else if(err.request) {
            dispatch(returnErrors(err.request.data, err.request.status));
            dispatch({
                type: AUTH_ERROR
            });
        };

        dispatch(returnErrors("An error occurred", 500));
        dispatch({
            type: AUTH_ERROR
        });
    });
};

export const login = ({ _id, email, password }) => dispatch => {
    axios.put(`/api/v1/clients/${_id}/jwt`, { _id, email, password })
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) {
            dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAILED"));
            dispatch({
                type: AUTH_ERROR
            });

        } else if(err.request) {
            dispatch(returnErrors(err.request.data, err.request.status, "LOGIN_FAILED"));
            dispatch({
                type: AUTH_ERROR
            });
        };

        dispatch(returnErrors("An error occurred", 500, "LOGIN_FAILED"));
        dispatch({
            type: AUTH_ERROR
        });
    }); 
};

export const logout = _id => dispatch => {
    axios.delete(`/api/v1/clients/${_id}/jwt`)
    .then(res => dispatch({
        type: LOGOUT_SUCCESS
    }))
    .catch(err => {
        if(err.response) {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });

        } else if(err.request) {
            dispatch(returnErrors(err.request.data, err.request.status));
            dispatch({
                type: AUTH_ERROR
            });
        };

        dispatch(returnErrors("An error occurred", 500));
        dispatch({
            type: AUTH_ERROR
        });
    }); 
};