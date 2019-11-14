import {
    LOGIN_USER,
} from "../actions/actionTypes";

const initialState =
    {
        isAuthenticated: false,
        currentUser:null
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload
            };
        default:
            return state;
    }
}