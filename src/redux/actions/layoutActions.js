import {
    SET_STATUS_MESSAGE,
    SET_LOADING
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

