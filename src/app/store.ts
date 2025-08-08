import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from "../features/auth/model/slice.ts";
import {authApi} from "../features/auth/api/authApi.ts";
import {reportTheftApi} from "../features/ReportTheftForm/api/reportTheftApi.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [reportTheftApi.reducerPath]: reportTheftApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            reportTheftApi.middleware
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
