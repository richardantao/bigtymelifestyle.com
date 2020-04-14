import { 
    AUTH_ERROR, 
    USER_REQUESTED, USER_LOADED, 
    LOGIN_SUCCESS, LOGIN_FAILED, 
    LOGOUT_SUCCESS, 
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: false,
    user: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
            case AUTH_ERROR:
            case LOGIN_FAILED:
            case LOGOUT_SUCCESS: 
                localStorage.removeItem("token");
                return {
                    ...state,
                    token: null,
                    user: null,
                    isAuthenticated: false,
                    loading: false
                };
        default: 
            return state;
    };
};