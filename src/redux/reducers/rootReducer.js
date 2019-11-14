import {combineReducers} from 'redux';

import layoutReducer from "./layoutReducer";
import dataReducer from "./dataReducer";
import authReducer from "./authReducer";

export default combineReducers({
                                   auth: authReducer,
                                   layout: layoutReducer,
                                   data: dataReducer
                               });
