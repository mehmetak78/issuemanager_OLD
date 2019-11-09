import {
    SET_STATUS_MESSAGE
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
        default:
            return state;
    }
}