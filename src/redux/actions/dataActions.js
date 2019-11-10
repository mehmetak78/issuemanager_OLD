import {
    SET_LOADING,
    CRUD_NONE,
    CRUD_INSERTING,
    CRUD_EDITING,
    CRUD_SELECTED,
    SET_PATHS,
    SET_FORM_DATA,
    SET_INITIAL_FORM_DATA,
    INSERT_DATA,
    UPDATE_DATA,
    CANCEL_INSERT,
    CANCEL_UPDATE,
    CLEAR_FORM
} from './actionTypes';

import {insertDB, updateDB} from "../../db";

const setLoading = (val) => {
    return {
        type: SET_LOADING,
        payload: val
    }
};

export const setCRUDActionNone = (message) => {
    return {
        type: CRUD_NONE,
        payload: message
    }
};
export const setCRUDActionInserting = (message) => {
    return {
        type: CRUD_INSERTING,
        payload: message
    }
};
export const setCRUDActionEditing = (message) => {
    return {
        type: CRUD_EDITING,
        payload: message
    }
};
export const setCRUDActionSelected = (message) => {
    return {
        type: CRUD_SELECTED,
        payload: message
    }
};

export const setPaths = (formPath, dataPath) => {
    return {
        type: SET_PATHS,
        payload: {
            formPath: formPath,
            dataPath: dataPath
        }
    }
};

export const clearForm = () => {
    return {
        type: CLEAR_FORM ,
        payload: null
    }
};

export const setFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData
    }
};

export const setInitialFormData = (initialFormData) => {
    return {
        type: SET_INITIAL_FORM_DATA,
        payload: initialFormData
    }
};

export const cancelInsert = () => {
    return {
        type: CANCEL_INSERT,
        payload: null
    }
};

export const cancelUpdate = () => {
    return {
        type: CANCEL_UPDATE,
        payload: null
    }
};

export const insertData = (formData, formPath) => async dispatch => {
    dispatch(setLoading(true));
    const res = await insertDB(formData, formPath);
    if (res.error) {
        console.log(res.error);

    } else {
        dispatch({type: INSERT_DATA, payload: res.data});
    }
    dispatch(setLoading(false));
};

export const updateData = (formData, formPath) => async dispatch => {
    dispatch(setLoading(true));
    const res = await updateDB(formData, formPath);
    if (res.error) {
        console.log(res.error);

    } else {
        dispatch({type: UPDATE_DATA, payload: res.data});
    }
    dispatch(setLoading(false));
};

