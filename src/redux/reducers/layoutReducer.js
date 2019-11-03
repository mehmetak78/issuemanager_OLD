import {
    TOGGLE_LEFT_MENU
} from "../actions/actionTypes";

const initialState =
    {
        settings: {},
        leftMenuCollapsed: false
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LEFT_MENU:
            return {
                ...state,
                leftMenuCollapsed: !state.leftMenuCollapsed
            };

        default:
            return state;
    }
}