import {
    SET_STATUS_MESSAGE,
    SET_LOADING,
    SET_SEARCH_TEXT,
    CLEAR_SEARCH_TEXT,
} from './actionTypes';

export const setStatusMessage = (message) =>  {
    return {
        type: SET_STATUS_MESSAGE,
        payload: message
    }
};

export const setLoading = (val) =>  {
    return {
        type: SET_LOADING,
        payload: val
    }
};

export const setSearchText = (text) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: text
    }
};
export const clearSearchText = () => {
    return {
        type: CLEAR_SEARCH_TEXT,
        payload: null
    }
};
