import {
    LOGIN_USER,
    LOGOUT_USER
} from './actionTypes';
import {getData} from "../../db";

import {setLoading} from "./layoutActions";

export const loginUser = (dataPath, user) => async dispatch => {
    console.log(user);
    const searchParam = `?userName=${user.userName}`;
    console.log(searchParam);
    dispatch(setLoading(true));
    const res = await getData(dataPath, searchParam);
    if (res.error) {
        console.log(res.error);
    } else {
        if (res.data.length === 1) {
            dispatch({type: LOGIN_USER, payload: res.data[0]});
        } else if (res.data.length > 1) {
            console.log("More Than One User")
        } else {
            console.log("Couldn't found")
        }
        console.log(res.data);
    }
    dispatch(setLoading(false));
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
        payload: null
    }
};