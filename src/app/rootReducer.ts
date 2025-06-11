import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from "../entities/auth/model/slice.ts";

export const rootReducer = combineReducers({
    auth: authReducer,
});
