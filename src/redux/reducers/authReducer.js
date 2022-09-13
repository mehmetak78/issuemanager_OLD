import {
    LOGIN_USER, LOGOUT_USER,
} from "../actions/actionTypes";

const initialState =
    {
        isAuthenticated: true,
        currentUser:
            {
                "id": 1,
                "userName": "mehmetak78@hotmail.com",
                "firstName": "Mehmet",
                "lastName": "Ak"
            }
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: null
            };
        default:
            return state;
    }
}