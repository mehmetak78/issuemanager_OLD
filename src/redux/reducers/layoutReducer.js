import {
    SET_STATUS_MESSAGE,
    SET_LOADING,
    SET_SEARCH_TEXT,
    CLEAR_SEARCH_TEXT
} from "../actions/actionTypes";

const initialState =
    {
        settings: {},
        searchText: "",
        statusMessage: "No Message",
        loading: false
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
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            };
        case CLEAR_SEARCH_TEXT:
            return {
                ...state,
                searchText: ""
            };
        default:
            return state;
    }
}