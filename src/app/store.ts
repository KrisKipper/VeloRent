import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from "../entities/auth/model/slice.ts";
import {authApi} from "../entities/auth/api/authApi.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
