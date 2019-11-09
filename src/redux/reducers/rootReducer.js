import {combineReducers} from 'redux';

import layoutReducer from "./layoutReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
                                   layout: layoutReducer,
                                   data: dataReducer
                               });
