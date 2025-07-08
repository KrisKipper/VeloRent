import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from "../features/auth/model/slice.ts";

export const rootReducer = combineReducers({
    auth: authReducer,
});
