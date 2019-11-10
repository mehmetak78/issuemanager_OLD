import {
    SET_STATUS_MESSAGE,
    SET_LOADING
} from "../actions/actionTypes";

const initialState =
    {
        settings: {},
        statusMessage: "No Message",
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS_MESSAGE:
            return {
                ...state,
                statusMessage: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}