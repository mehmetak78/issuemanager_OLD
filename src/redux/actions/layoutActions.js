import {
    SET_STATUS_MESSAGE,
} from './actionTypes';

export const setStatusMessage = (message) =>  {
    return {
        type: SET_STATUS_MESSAGE,
        payload: message
    }
};

