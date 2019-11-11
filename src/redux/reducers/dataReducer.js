import {
    CRUD_NONE,
    CRUD_INSERTING,
    CRUD_EDITING,
    CRUD_SELECTED,
    SET_FORM_DATA,
    SET_PATHS,
    SET_INITIAL_FORM_DATA,
    INSERT_DATA,
    UPDATE_DATA,
    CANCEL_INSERT,
    CANCEL_UPDATE, CLEAR_FORM, SET_VALIDATIONS, CLEAR_VALIDATIONS, SET_ERRORS, CLEAR_ERRORS, ADD_ERROR
} from "../actions/actionTypes";


const initialState =
    {
        crudState: CRUD_NONE,
        formPath: "",
        dataPath: "",
        initialFormData: null,
        formData: null,
        validations: null,
        formErrors: null
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_FORM:
            return initialState;
        case CRUD_NONE:
        case CRUD_INSERTING:
        case CRUD_EDITING:
        case CRUD_SELECTED:
            return {
                ...state,
                crudState: action.type
            };
        case SET_PATHS:
            return {
                ...state,
                ...action.payload
            };
        case SET_VALIDATIONS:
            return {
                ...state,
                validations: action.payload
            };
        case CLEAR_VALIDATIONS:
            return {
                ...state,
                validations: null
            };
        case ADD_ERROR:
            return {
                ...state,
                formErrors: {...state.formErrors, ...action.payload}
            };
        case SET_ERRORS:
            return {
                ...state,
                formErrors: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                formErrors: null
            };
        case SET_FORM_DATA:
            return {
                ...state,
                formData: {...state.formData, ...action.payload}
            };
        case SET_INITIAL_FORM_DATA:
            return {
                ...state,
                initialFormData: action.payload
            };
        case CANCEL_INSERT:
            return {
                ...state,
                crudState: CRUD_INSERTING,
                formData: {...state.initialFormData},
                formErrors: null
            };
        case CANCEL_UPDATE:
            return {
                ...state,
                crudState: CRUD_SELECTED,
                formData: {...state.initialFormData},
                formErrors: null
            };
        case INSERT_DATA:
        case UPDATE_DATA:
            return {
                ...state,
                crudState: CRUD_SELECTED,
          //               initialFormData: state.formData,        /***/
                formData: action.payload,
                formErrors: null
            };
        default:
            return state;
    }
}