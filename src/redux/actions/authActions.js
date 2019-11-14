import {
    LOGIN_USER
} from './actionTypes';

export const loginUser = (user) =>  {
    return {
        type: LOGIN_USER,
        payload: user
    }
};

